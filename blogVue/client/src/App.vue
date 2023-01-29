<script setup>
import HeaderC from './components/HeaderComp.vue'
import FooterC from './components/FooterComp.vue'
import Admin from './components/AdminComp.vue'
import Login from './components/LogComp.vue'
</script>
<template>
  <HeaderC></HeaderC>
  <main>
    <Admin v-if="isAdmin"></Admin>
    <div v-else>
      <Login v-if="showlogin" :isAdmin="isAdmin" @changeIsAdmin="changeIsAdmin"></Login>
      <button @click="showlogin = !showlogin">{{(showlogin == true) ? 'Hide login' : 'Login'}}</button>
    </div>
    <div class="res">
      <div v-for="p of postsStore.posts" :key="p._id" class="post">
        <h1 v-if="editId != p._id">{{ p.title }}</h1>
        <input v-else type="text" placeholder="Заголовок" v-model="titledit" style="margin-top: 10px" />
        <h2>{{ p.date }}</h2>
        <div>
          <div class="blogtext">
            <p v-if="editId != p._id">
              {{ p.text }}
            </p>
            <textarea v-else placeholder="Текст" v-model="textedit" style="width: 80%"></textarea>
          </div>
          <div class="imgConteiner" v-if="Boolean(p.src)">
            <!-- <img :src="dburl + '/assets/' + p.src" /> -->
            <img :src="'http://localhost:5173/src/assets/' + p.src" />
            <!-- <img :src="dburl + '/src/assets/' + p.src" /> -->
          </div>
          <div class="flex btnpost" v-if="editId != p._id">
            <a :href="'https://' + p.url" class="button" v-if="Boolean(p.url)">Сlick link</a>
            <div style="margin-right: 30px">
              <button class="btnact" @click="delPost(p)">
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
                <span>{{ (fileEditName) ? fileEditName : "Choose file" }}</span>
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
  components: {
    Login
  },
  data() {
    return {
      showlogin: false,
      isAdmin: false,
      // dburl: 'https://blog.lfazliev.com',
      dburl: 'http://localhost:3002',
      titledit: "",
      textedit: "",
      urledit: "",
      editId: '',
      fileEditName: '',
      editSrc: "",
      fileEdit: null
    };
  },
  async beforeMount() {
    const data = await fetch(`${this.dburl}/posts`);
    const posts = await data.json();
    this.postsStore.posts = posts.all;
    const token = localStorage.getItem('token');
    console.log(token);
    const response = await fetch(`${this.dburl}/checkjwt`, {
      headers: {
        // 'Access-Control-Expose-Headers': 'Authorization',
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": token,
      },
      method: "POST",
    });
    const result = await response.text()
    if (result) {
      this.isAdmin = true
    }
  },
  methods: {
    changeIsAdmin(newValue) {
      this.isAdmin = newValue
    },
    previewEditFiles(event) {
      console.log(event.target.files[0]);
      this.fileEdit = event.target.files[0];
      this.fileEditName = event.target.files[0].name;
      this.editSrc = event.target.files[0].name;
    },
    delPost: async function (p) {
      this.postsStore.delel(p)
      const result = await fetch(`${this.dburl}/posts`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ p }),
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
        const data = new FormData();
        data.append("file", (this.fileEdit) ? this.fileEdit : null);
        data.append("title", post.title);
        data.append("text", post.text);
        data.append("data", new Date().toLocaleDateString());
        data.append("url", post.url);
        data.append("src", post.src);
        data.append("_id", post._id);
        this.editId = '';
        const result = await fetch(`${this.dburl}/posts`, {
          method: 'PUT',
          body: data,
        })
        const insertRes = await result.json()
        console.log(insertRes);
        post.src = this.fileEditName
        this.fileEdit = null
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
