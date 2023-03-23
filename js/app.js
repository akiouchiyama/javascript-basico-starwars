const LIST = [
    {
        id: 1,
        nome: "Yoda",
        avatar: "images/yoda.png"
    },
    {
        id: 2,
        nome: "C3pO",
        avatar: "images/c3po.png"
    },
    {
        id: 3,
        nome: "Chewbacca",
        avatar: "images/chewbacca.png"
    },
    {
        id: 4,
        nome: "Han Solo",
        avatar: "images/hansolo.png"
    },
    {
        id: 5,
        nome: "Princesa Leia",
        avatar: "images/leia.png"
    },
    {
        id: 6,
        nome: "Luke Skywalker",
        avatar: "images/luke.png"
    },
    {
        id: 7,
        nome: "R2D2",
        avatar: "images/r2d2.png"
    },
    {
        id: 8,
        nome: "Darth Vader",
        avatar: "images/vader.png"
    }
]

const App = new Vue({
    el: '#app',
    data: {
        title: "Star Wars Lego",
        userName: "Victor",
        characters: LIST,
        searchName: ""
    },
    methods: {
        like(name) {
            alert(`O personagem ${name} foi curtido`)
        },
        remove(id) {
            const list = this.characters
            const result = list.filter(item => item.id !== id)
            this.characters = result
        },
        search() {
            if(this.searchName === ''){
                return alert("O campo de busca precisa ser preenchido")
            }
            const list = LIST
            const result = list.filter(item => item.nome === this.searchName)
            if(result.length == 0){
                alert("Nenhum personagem com nome " + this.searchName + " encontrado")
            } else {
                this.characters = result
            }
        },
        reset() {
            this.characters = LIST
        }
    }
})