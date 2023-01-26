<template>
    <div class="res" id="flexdiv">
        <input v-model="title" type="text" placeholder="Заголовок" />
        <div>
            <input type="file" id="file1" @change="previewFiles" class="filest" />
            <label class="filecont" for="file1">
                <span>{{ fileName }}</span>
                <div>Browse</div>
            </label>
        </div>
        <input v-model="url" type="url" placeholder="Ссылка" />
        <textarea v-model="text" placeholder="Текст"></textarea>
        <button @click="addPost">Добавить пост</button>
    </div>
</template>
<script>
import { usePostsStore } from "../stores/posts";
import { mapStores } from "pinia";
export default {
    data() {
        return {
            // dburl: 'https://blog.lfazliev.com',
            dburl: 'http://localhost:3002',
            title: "",
            text: "",
            url: "",
            src: "",
            file: null,
            fileName: "Choose file",
        };
    },
    async beforeMount() {
        const data = await fetch(`${this.dburl}/posts`);
        const posts = await data.json();
        this.postsStore.posts = posts.all;
    },
    methods: {
        previewFiles(event) {
            console.log(event.target.files[0]);
            this.file = event.target.files[0];
            this.fileName = event.target.files[0].name;
            this.src = event.target.files[0].name;
        },
        addPost: async function () {
            if (this.title != '' && this.text != '') {
                const data = new FormData();
                if (this.file) {
                    data.append("file", this.file);
                }
                else {
                    data.append("file", null);
                }
                data.append("title", this.title);
                data.append("text", this.text);
                data.append("url", this.url);
                const result = await fetch(`${this.dburl}/posts`, {
                    method: "POST",
                    body: data,
                });
                const insertRes = await result.json();
                this.postsStore.createPost(this.title, this.text, this.url, this.src, insertRes.result.insertedId)
                this.title = "";
                this.text = "";
                this.url = "";
                this.file = null;
                this.fileName = "Choose file";
            }
        },
    },
    computed: { ...mapStores(usePostsStore) },
};
</script>