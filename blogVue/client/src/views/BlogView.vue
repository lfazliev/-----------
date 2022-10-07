<script setup>
import HighbarC from '@/components/HighbarComp.vue'
import HeaderC from '@/components/HeaderComp.vue'
import FooterC from '@/components/FooterComp.vue'
</script>
<template>
  <HeaderC></HeaderC>
  <HighbarC></HighbarC>
  <main>
    <div class="res" id=flexdiv>
      <input v-model="header" type="text" placeholder="Заголовок">
      <div>
        <input type="file" id=file1 @change="previewFiles" class=filest>
        <label class=filecont for="file1">
          <span>{{fileName}}</span>
          <div>Browse</div>
        </label>
      </div>
      <input v-model="url" type="url" placeholder="Ссылка">
      <textarea v-model="text" placeholder="Текст"></textarea>
      <button @click="addPost">Добавить пост</button>
    </div>
    <div class=res>
      <div v-for="p of posts" :key="p._id" class=post>
        <h1>{{p.title}}</h1>
        <div>
          <div class="blogtext">
            <p>
              {{p.text}}
            </p>
          </div>
          <div class="imgConteiner">
            <img :src="'src/assets/' + p.src" alt="">
          </div>
          <div class='flex btnpost'>
            <a href="#" class="button">Discover Now</a>
            <div style="margin-right:30px">
              <button class="btnact" @click="delNews(p._id)"><img src="src/assets/img/trashimg.svg"></button>
              <button class="btnact" @click="editNews(p._id)"><img src="src/assets/img/edit-svgrepo-com.svg"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <FooterC></FooterC>
</template>

<script>
export default {
  data() {
    return {
      header: '',
      text: '',
      url: '',
      file: undefined,
      posts: [],
      fileName: 'Choose file'
    }
  },
  async beforeMount() {
    const data = await fetch('http://127.0.0.1:3002/posts')
    const posts = await data.json()
    this.posts = posts.all
  },
  methods: {
    previewFiles(event) {
      console.log(event.target.files[0])
      this.file = event.target.files[0]
      this.fileName = event.target.files[0].name
    },
    async upload() {
      if (this.file) {
        const data = new FormData()
        data.append('file', this.file)
        data.append('name', 'newName')

        const result = await fetch('/photo', {
          method: 'POST',
          body: data
        })
        console.log(result)
      }
    },
    addPost: async function () {

      if (this.file) {
        const data = new FormData()
        data.append('file', this.file)
        data.append('title', this.header)
        data.append('text', this.text)
        data.append('url', this.url)

        const result = await fetch('http://127.0.0.1:3002/posts', {
          method: 'POST',
          body: data
        })
        const insertRes = await result.json()
        this.post.push({
          header: this.header,
          text: this.text,
          url: this.url,
          file: this.file,
          _id: insertRes.result.insertedId
        })
        this.header = ''
        this.text = ''
        this.url = ''
        this.file = undefined
        this.fileName = 'Choose file'
      }
    },
    delNews: async function (_id) {
      this.posts.splice(this.posts.findIndex(p => p._id == _id), 1)
      const result = await fetch('http://127.0.0.1:3002/posts', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ _id: _id })
      })
      const insertRes = await result.json()
      console.log(insertRes);
    },
    editPost: async function (_id) {
      this.posts.findIndex(n => n._id == _id)
      const result = await fetch('http://127.0.0.1:3002/posts', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ id: _id })
      })
      const insertRes = await result.json()
      console.log(insertRes);
    },
  },


}

</script>

<style>
.imgConteiner img {
  width: 95%;
  margin: 0 auto
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
  margin: 0 auto
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

  padding: 4px 7px;

}

.btnact>img {

  width: 15px
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
</style>
