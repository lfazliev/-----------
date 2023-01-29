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
    props: ['isAdmin'],
    methods: {
        sendUser: async function () {
            const data = new FormData();
            data.append("login", this.login);
            data.append("pwd", this.pwd);
            const response = await fetch(`${this.dburl}/login`, {
                method: "POST",
                body: data,
            });
            const result = await response.text()
            if (Boolean(result) == true) {
                localStorage.setItem('token', response.headers.get('Authorization'))
                this.$emit('changeIsAdmin', true)
            }
            else {
                console.log("Неврный логин или пароль");
            }
        }
    }
}
</script>