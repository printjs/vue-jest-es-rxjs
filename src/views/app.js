import Component from "vue-class-component";
import Vue from "vue";



@Component({
    name: "app",
    template: require("./app.html"),
    domStreams: ["y$"]
})
export class App extends Vue {
    constructor() {
        super();
        this.count = 1;
    }

    created() {
        this.$subscribeTo(this.y$, e => {
            console.log(e);
            this.count++;
        });
    }
}