import { mount } from '@vue/test-utils'; //ラッパーとなるmountを読み出し
import Counter from '@/components/counter.vue'; //テスト対象のコンポーネントを読み込む

//テストスイート定義
describe('Counter.vue', () => {
  it('初期値確認',//テストケースの名前
     () => {
        const wrapper = mount(Counter);
        expect(wrapper.text()).toContain('Count: 0');
  });

  it('ボタンを押すとカウントアップする', 
    async () => { //クリックに伴う再描画と同期を取るためにasyncにしている
        const wrapper = mount(Counter);
        const button = wrapper.find('button');//ボタンを特定
        await button.trigger('click');//クリックする
        expect(wrapper.text()).toContain('Count: 1');//1回クリックで1になること
  });

  it('複数回ボタンを押す',
    async () => {
        const wrapper = mount(Counter);
        const button = wrapper.find('button');
        await button.trigger('click');
        await button.trigger('click');
        expect(wrapper.text()).toContain('Count: 2'); //
  });
});
