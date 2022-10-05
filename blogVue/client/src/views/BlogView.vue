<template>
  <main>
    <div class="flexinp">
      <input v-model="header" type="text" placeholder="Заголовок">
      <div>
        <input type="file" id=file1 @change="previewFiles" class=filest>
        <label class=filecont for="file1">
          <span>Choose file</span>
          <div>Browse</div>
        </label>
      </div>
      <input v-model="url" type="url" placeholder="Ссылка">
      <textarea v-model="text" placeholder="Текст"></textarea>
      <button @click="addPost">Добавить пост</button>
    </div>
    <div v-for="p of posts" :key="p._id">
      <h1>{{p.title}}</h1>
      <div class="flex">
        <div class="blogtext">
          <p>
            {{p.text}}
          </p>
          <a href="#" class="button">Discover now</a>
          <button class="button" @click="delNews(n._id)">Delete</button>
          <button class="button" @click="editNews(n._id)">Edit</button>
        </div>
        <div class="imgConteiner">
          <img :src="'src/assets/' + p.src" alt="">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      header: '',
      text: '',
      url: '',
      file: undefined,
      posts: []
    }
  },
  async beforeMount() {
    const data = await fetch('http://127.0.0.1:3002/posts')
    const posts = await data.json()
    this.posts = posts.all
  },
  methods: {
    addPost: async function () {
      const result = await fetch('http://127.0.0.1:3002/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ header: this.header, text: this.text, url: this.url, img: this.img })
      })
      const insertRes = await result.json()
      this.post.push({
        header: this.header,
        text: this.text,
        url: this.url,
        img: this.img,
        _id: insertRes.result.insertedId
      })
    },
    delNews: async function (_id) {
      this.news.splice(this.news.findIndex(n => n._id == _id), 1)
      const result = await fetch('http://127.0.0.1:3002/posts', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ id: _id })
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
.flexinp {
  margin: 10px;
  display: flex;
  width: 30%;
  flex-direction: column;
}

.blogtext {
  flex: 3;
}

.button:hover {
  cursor: pointer;
}

.button {
  outline: 0px
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
  background-color: rgb(178, 255, 133);
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  color: black !important;
  /* box-shadow: 0px 0px 18px -1px rgba(0, 0, 0, 0.2); */
}

input[type="file"] {
  display: none;
}

label:hover {
  cursor: pointer;
}
</style>
