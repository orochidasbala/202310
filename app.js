const app = Vue.createApp({
  data() {
    return {
      books: [
        {
          title: "Vue",
          author: "gnuak",
          img: "img/1.png",
          isFav: true,
        },
        {
          title: "Python",
          author: "dothon",
          img: "img/2.jpg",
          isFav: false,
        },
        {
          title: "Bash",
          author: "orochi",
          img: "img/3.png",
          isFav: true,
        },
      ],
      showData: true,
      link: "https://www.khitminnyo.com/",
    };
  },
  methods: {
    nameChange() {
      let newname = window.prompt("Enter new name");
      this.author = newname;
      return this.age;
    },
    mouseover() {
      console.log("Mouse over is working!");
    },
    mouseleave() {
      console.log("mouse pointer is left.");
    },
    dclick() {
      console.log("Double clicked!");
    },
    clickHandler(book){
        book.isFav = !book.isFav;
    }
  },
  computed: {
    filteredBooks() {
        return this.books.filter(book=>{
            return book.isFav;
        });
    }
  }
});

app.mount("#app");
