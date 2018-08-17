import {
    shallowMount,
    mount
} from "@vue/test-utils";
import {
    App
} from "@views/app";
import Vue from "vue";
import VueRx from "vue-rx";


describe("src/components/cloudtable/table.ts", () => {
    // let cmp;
    beforeEach(() => {
        Vue.use(VueRx);
        // cmp = mount(App, {});
    });

    it("组件初始化", () => {
        const wrapper = mount(App);
        expect(wrapper.isVueInstance()).toBeTruthy();
        // cmp
        // expect(cmp.vm.handleCurrentChange).toBeCalled();

    });

    it("组件按钮事件是否正常", () => {
        const wrapper = shallowMount(App);
        wrapper.find("button").trigger("click");
        expect(wrapper.find("h3").text()).toMatch("2");
    });

    // spyOn
    test("example", () => {
        const a = "1";
        expect(a).toEqual("1");
    });

});