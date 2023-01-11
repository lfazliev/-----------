<script setup>
import HeaderC from './components/HeaderComp.vue'
import FooterC from './components/FooterComp.vue'
</script>
<template>
  <HeaderC></HeaderC>
  <main>
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
    <div class="res">
      <div v-for="p of postsStore.posts" :key="p._id" class="post">
        <h1 v-if="editId != p._id">{{ p.title }}</h1>
        <input v-else type="text" placeholder="Заголовок" v-model="titledit" style="margin-top: 10px" />
        <div>
          <div class="blogtext">
            <p v-if="editId != p._id">
              {{ p.text }}
            </p>
            <textarea v-else placeholder="Текст" v-model="textedit" style="width: 80%"></textarea>
          </div>
          <div class="imgConteiner">
            <img :src="`src/assets/${p.src}`" />
          </div>
          <div class="flex btnpost" v-if="editId != p._id">
            <a :href="'https://' + p.url" class="button">Discover Now</a>
            <div style="margin-right: 30px">
              <button class="btnact" @click="delPost(p._id)">
                <img src="./assets/img/trashimg.svg" />
              </button>
              <button class="btnact" @click="editPost(p._id)">
                <img src="./assets/img/edit-svgrepo-com.svg" />
              </button>
            </div>
          </div>
          <div v-if="editId == p._id" class="res" id="flexdiv">
            <div>
              <input type="file" id="file2" @change="previewEditFiles" class="filest" />
              <label class="filecont" for="file2">
                <span>{{ fileEditName }}</span>
                <div>Browse</div>
              </label>
            </div>
            <input type="url" placeholder="Ссылка" v-model="urledit" />
            <button @click="savePost(p._id)">Сохранить пост</button>
          </div>
        </div>
      </div>
    </div>
  </main>
  <FooterC></FooterC>
</template>

<script>
import { usePostsStore } from "./stores/posts";
import { mapStores } from "pinia";
export default {
  data() {
    return {
      titledit: "",
      textedit: "",
      urledit: "",
      editId: '',
      title: "",
      text: "",
      url: "",
      src: "",
      file: undefined,
      fileName: "Choose file",
      fileEditName: '',
      editSrc: "",
    };
  },
  async beforeMount() {
    const data = await fetch("https://blog.lfazliev.com/posts");
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
    previewEditFiles(event) {
      console.log(event.target.files[0]);
      this.fileEdit = event.target.files[0];
      this.fileEditName = event.target.files[0].name;
      this.editSrc = event.target.files[0].name;
    },
    addPost: async function () {
      if (this.file) {
        const data = new FormData();
        data.append("file", this.file);
        data.append("title", this.title);
        data.append("text", this.text);
        data.append("url", this.url);
        const result = await fetch("https://blog.lfazliev.com/posts", {
          method: "POST",
          body: data,
        });
        const insertRes = await result.json();
        this.postsStore.createPost(this.title, this.text, this.url, this.src, insertRes.result.insertedId)
        this.title = "";
        this.text = "";
        this.url = "";
        this.file = undefined;
        this.fileName = "Choose file";
      }
    },
    delPost: async function (_id) {
      this.postsStore.delel(_id)
      const result = await fetch("https://blog.lfazliev.com/posts", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ _id: _id }),
      });
      const insertRes = await result.json();
      console.log(insertRes);
    },
    savePost: async function (_id) {
      if (this.titledit != '' && this.textedit != '') {
        let post = this.postsStore.findpost(_id);
        post.title = this.titledit
        post.text = this.textedit
        post.url = this.urledit
        post.src = this.fileEditName
        const data = new FormData();
        data.append("file", this.fileEdit);
        data.append("title", post.title);
        data.append("text", post.text);
        data.append("url", post.url);
        data.append("src", post.src);
        data.append("_id", post._id);
        this.editId = '';
        const result = await fetch('https://blog.lfazliev.com/posts', {
          method: 'PUT',
          body: data,
        })
        const insertRes = await result.json()
        console.log(insertRes);
      }
      else {
        alert('Заполните поля текст и заголовок')
      }
    },
    editPost: async function (_id) {
      if (this.editId == '') {
        this.editId = _id;
        let post = this.postsStore.findpost(_id);
        this.titledit = post.title;
        this.textedit = post.text;
        this.urledit = post.url;
        this.fileEditName = post.src
      }
      else {
        alert('Вы не завершили ред-ие другого поста')
      }
    },
  },
  computed: { ...mapStores(usePostsStore) },
};
</script>

<style>
.imgConteiner img {
  width: 95%;
  margin: 0 auto;
}

#flexdiv {
  height: 300px;
  justify-content: space-around;
}

.btnpost {
  align-items: center;
  justify-content: space-between;
}

.res {
  margin: 0.5rem 0rem 0.5rem 2px;
  font-size: 17px;
  display: flex;
  padding: 5px;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
}

.flexinp {
  margin: 10px;
  display: flex;
  width: 30%;
  flex-direction: column;
}

.blogtext {
  flex: 3;
}

.buttons:hover {
  cursor: pointer;
}

.post {
  border: 2px solid black;
  border-radius: 10px;
  background-color: aliceblue;
  padding-left: 1em;
  margin-bottom: 1rem;
}

.buttons a:visited {
  color: black;
}

.btnact {
  height: 28px;
  padding: 5px;
}

.btnact:hover {
  background: #00000034;
}

.btnact>img {
  width: 15px;
}

.btnact {
  cursor: pointer;
  text-decoration: none;
  transition: 300ms;
  border: 1px solid #cccccc;
  border-radius: 5px;
  background: #f9f9f9;
  color: #000000;
  margin: 5px;
}

.filecont>div {
  background-color: rgb(188, 188, 188);
  height: 100%;
  padding: 5px;
  border-radius: 0px 5px 5px 0px;
  transition: 300ms;
}

.filecont>span {
  padding: 5px;
  margin: auto 0;
}

.filecont>div:hover {
  background-color: rgb(202, 202, 202);
  transition: 300ms;
}

.filecont {
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  color: black;
  margin-bottom: 7px;
  border: 1px solid #ccc;
  /* box-shadow: 0px 0px 18px -1px rgba(0, 0, 0, 0.2); */
}

input[type="file"] {
  display: none;
}

label:hover {
  cursor: pointer;
}

label span {
  padding: 5px;
  overflow: hidden;
  height: 20px
}
</style>
