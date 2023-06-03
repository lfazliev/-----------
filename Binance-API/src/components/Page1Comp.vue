<template>
    <div class="h-screen-10 d-flex justify-space-between visscroll">

        <div class='h-100'>
            <p>Bids ({{ symbol }})</p>
            <table class="w-100 h-100 d-flex flex-column listmobile">
                <thead>
                    <tr class='d-flex'>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th class="total">Total</th>
                    </tr>
                </thead>
                <v-virtual-scroll v-if="bids.length != 0" :items="bids" height="90%">
                    <template v-slot:default="{ item }">
                        <div>
                            <td>{{ Number(item.price).toFixed(2) }}</td>
                            <td>{{ Number(item.quantity).toFixed(5) }}</td>
                            <td class="total">{{ (item.price * item.quantity).toFixed(5) }}</td>
                        </div>
                    </template>
                </v-virtual-scroll>
            </table>

        </div>
        <div class='h-100'>
            <p>Asks ({{ symbol }})</p>
            <table class="w-100 h-100 d-flex flex-column listmobile">
                <thead>
                    <tr class='d-flex'>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th class="total">Total</th>
                    </tr>
                </thead>
                <v-virtual-scroll v-if="asks.length != 0" :items="asks" height="90%">
                    <template v-slot:default="{ item }">
                        <div>
                            <td>{{ Number(item.price).toFixed(2) }}</td>
                            <td>{{ Number(item.quantity).toFixed(5) }}</td>
                            <td class="total">{{ (item.price * item.quantity).toFixed(5) }}</td>
                        </div>
                    </template>
                </v-virtual-scroll>
            </table>

        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Page1',
    data() {
        return {
            symbol: 'BTCUSDT',
            bids: [],
            asks: [],
            lastUpdateId: 0,
            buffer: [],
            checkFirstE: false,
            ws: null
        }
    },
    methods: {
        compareArrays(data, event, E, pol) {
            for (let i = 0; i < event.length; i++) {
                event[i].createtime = E
                const index = data.findIndex(d => d.price === event[i].price);
                if (index >= 0) {
                    if (Number(event[i].quantity) < 0.00001) {
                        this.$bus.emit('diffChange', `${(pol === 'a') ? 'ask:' : 'bid:'} ${data[index].price} ${data[index].quantity} has been removed`)
                        data.splice(index, 1);
                        event.splice(i, 1)
                        i--
                    }
                    else {
                        if (Number(event[i].quantity) !== data[index].quantity) {
                            this.$bus.emit('diffChange', `${(pol === 'a') ? 'ask:' : 'bid:'} ${data[index].price} ${data[index].quantity} updated to ${event[i].price} ${event[i].quantity}`)
                            data[index] = event[i]
                        }
                        event.splice(i, 1)
                        i--
                    }
                }
                else {
                    if (Number(event[i].quantity > 0.00001)) {
                        this.$bus.emit('diffChange', `${(pol === 'a') ? 'ask:' : 'bid:'} ${event[i].price} ${event[i].quantity} been added`)
                    }
                    else {
                        event.splice(i, 1);
                        i--
                    }
                }
            }
        },
        checkeventdata(event, data, E, pol) {
            const buf = event
            this.compareArrays(data, buf, E, pol)
            data.push(...buf)
            data.sort((a, b) => b.price - a.price)
            if (data.length > 5000) {
                while (data.length > 5000) {
                    let minIndex = 0;
                    data.reduce((min, item, index) => {
                        if (item.createtime === undefined) {
                            minIndex = index;
                            return min;
                        }
                        if (item.createtime < min) {
                            minIndex = index;
                            return item.createtime;
                        }
                        return min;
                    }, data[0].createtime);

                    data.splice(minIndex, 1);
                }
            }
        },
        eventProcess(event) {
            const transformedBids = event.b.map(bid => ({
                price: bid[0],
                quantity: bid[1],
                createtime: bid[3]
            }));

            const transformedAsks = event.a.map(ask => ({
                price: ask[0],
                quantity: ask[1],
                createtime: ask[3]
            }));
            this.lastUpdateId = event.u
            this.checkeventdata(transformedBids, this.bids, event.E, 'b')
            console.log(this.bids.length);
            this.checkeventdata(transformedAsks, this.asks, event.E, 'a')
        },
        processBuffer() {
            for (const item in this.buffer) {
                if (this.buffer[item].u <= this.lastUpdateId) {
                    this.buffer.splice(item, 1)
                }
                else {
                    if (!this.test) {
                        if (this.buffer[item].U <= (this.lastUpdateId + 1)) {
                            if (this.buffer[item].u >= (this.lastUpdateId + 1)) {
                                this.eventProcess(this.buffer[item])
                                this.test = true
                            }
                        }
                    }
                    else {
                        if (this.buffer[item].U = (this.lastUpdateId + 1)) {
                            this.eventProcess(this.buffer[item])
                        }
                    }
                    this.buffer.splice(item, 1)
                }
            }

        },
        getSnap() {
            setTimeout(() => {

                if (this.bids.length === 0) {
                    this.$binance.getOrderBook(this.symbol).then(data => {
                        data.bids = data.bids.filter(item => item[1] >= 0.00001);
                        data.asks = data.asks.filter(item => item[1] >= 0.00001);
                        const transformedBids = data.bids.map(bid => ({
                            price: bid[0],
                            quantity: bid[1],
                            createtime: bid[3]
                        }));

                        const transformedAsks = data.asks.map(ask => ({
                            price: ask[0],
                            quantity: ask[1],
                            createtime: ask[3]
                        }));
                        this.bids = transformedBids;
                        this.asks = transformedAsks;
                        this.lastUpdateId = data.lastUpdateId;

                    })
                }

            }, 1500)
        },
        getWS() {
            if (this.ws === null) {
                this.ws = this.$binance.subscribe(this.symbol)
            }
            this.ws.onmessage = function (e) {
                const event = JSON.parse(e.data)
                if (event.e === 'depthUpdate' && event.s === this.symbol) {
                    this.buffer.push(event)
                    if (this.lastUpdateId !== 0) {
                        if (this.buffer.length > 10) {
                            this.processBuffer()
                        }
                    }
                }
            }.bind(this)
        }
    },
    mounted() {

        this.$bus.on('symbolChange', (symbol) => {
            this.$binance.unsubscribe(this.symbol, this.ws)
            this.symbol = symbol
            this.bids = []
            this.asks = []
            this.lastUpdateId = 0
            this.buffer = []
            this.checkFirstE = false
            this.ws = null
            this.getSnap()
            this.getWS()
        })
        this.getSnap()
        this.getWS()
    }
})
</script>
<style scoped lang = 'scss'>
@media screen and (max-width:600px) {
    .visscroll {
        flex-direction: column;

        >div {
            width: 100% !important;
        }
    }
}

.visscroll {
    >div {
        width: 50%;

        >p {
            text-align: center;
        }

        table {
            ::-webkit-scrollbar-thumb {
                background-color: #000000;
                border-radius: 10px;
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
            }

            ::-webkit-scrollbar-thumb:hover {
                background-color: #939393;
            }

            ::-webkit-scrollbar {
                width: 10px;
            }

            .v-virtual-scroll {
                scrollbar-gutter: stable;
                overflow: hidden
            }

            .v-virtual-scroll:hover {
                overflow-y: scroll
            }

            @media screen and (max-width:800px) {
                table {
                    .total {
                        display: none;
                        width: 0%;
                    }
                }

                tr {
                    >th {
                        text-align: center;
                        width: 50% !important;
                    }
                }

                .v-virtual-scroll {
                    td {
                        text-align: center;
                        width: 50% !important;
                    }
                }
            }

            tr {

                display: flex;
                justify-content: space-around;

            }


            .v-virtual-scroll__container>div>div {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                justify-items: center;
            }

        }
    }
}
</style>