<template>
    <div class="res" id="flexdiv">
        <form onsubmit="return false;">
            <input v-model="login" type="text" placeholder="Login" />
            <input v-model="pwd" type="text" placeholder="Password" />
            <button type="submit" @click="sendUser()">отправить</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            login: '',
            pwd: '',
            // dburl: 'https://blog.lfazliev.com',
            dburl: 'http://localhost:3002',
        }
    },
    methods: {
        sendUser: async function () {
            console.log('start');
            const data = new FormData();
            data.append("login", this.login);
            data.append("pwd", this.pwd);
            const result = await fetch(`${this.dburl}/header`, {
                method: "POST",
                body: data,
            });
            const insertRes = await result.json();
            console.log(insertRes);
        }
    }
}
</script>