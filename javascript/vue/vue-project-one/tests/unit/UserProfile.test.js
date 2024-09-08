import { mount } from '@vue/test-utils';
import UserProfile from '@/components/UserProfile.vue';
import axios from 'axios';

// Axiosのモック
jest.mock('axios');

describe('UserProfile.vue', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // 各テストごとにモックをクリア
  });

  it('ユーザデータをAPIから取得(環境変数モック化を試している)', async () => {
    // モック設定
    // 環境変数のURL
    process.env.VUE_APP_API_URL = 'https://mockapi.example.com/user';
    // モックのレスポンス設定
    axios.get.mockResolvedValue({
      data: { name: 'John Doe', email: 'john.doe@example.com' },
    });

    // テスト環境のセットアップ
    // UserProfileコンポーネントをマウントして、テスト用のVueインスタンスを作成
    const wrapper = mount(UserProfile);

    // DOMの更新が終わるまで待つための設定
    // vmはvueのインスタンス
    // $nextTickはタスクキューの次のタスクの実行。このコードではコールスタックが空になったことを確認するために使っている
    await wrapper.vm.$nextTick();


    //評価値取得
    const actualUrl = axios.get.mock.calls[0][0];
    const expectedUrl = 'https://mockapi.example.com/user';

    //評価
    expect(actualUrl).toBe(expectedUrl);
    //エラーのときの確認用
    if (actualUrl !== expectedUrl) {
      console.log(`Expected URL: ${expectedUrl}, but received: ${actualUrl}`);
    }

    expect(wrapper.text()).toContain('Name: John Doe');
    expect(wrapper.text()).toContain('Email: john.doe@example.com');
  });

  it('APIエラーの表示', async () => {
    axios.get.mockRejectedValue(new Error('API Error'));

    const wrapper = mount(UserProfile);

    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain('Failed to fetch user data');
  });

  it('fetches user data from default API URL when environment variable is not set', async () => {
    // 環境変数のクリア
    delete process.env.VUE_APP_API_URL;

    axios.get.mockResolvedValue({
      data: { name: 'Jane Doe', email: 'jane.doe@example.com' },
    });

    const wrapper = mount(UserProfile);

    await wrapper.vm.$nextTick();

    expect(axios.get).toHaveBeenCalledWith('/api/user');
    expect(wrapper.text()).toContain('Name: Jane Doe');
    expect(wrapper.text()).toContain('Email: jane.doe@example.com');
  });
});
