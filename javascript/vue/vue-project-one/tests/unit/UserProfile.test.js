import { mount } from '@vue/test-utils';
import UserProfile from '@/components/UserProfile.vue';
import axios from 'axios';

// Axiosのモック
jest.mock('axios');

describe('UserProfile.vue', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // 各テストごとにモックをクリア
  });

  it('fetches user data from environment variable API URL', async () => {
    // 環境変数のモック
    process.env.VUE_APP_API_URL = 'https://mockapi.example.com/user';

    // モックのレスポンス設定
    axios.get.mockResolvedValue({
      data: { name: 'John Doe', email: 'john.doe@example.com' },
    });

    const wrapper = mount(UserProfile);

    await wrapper.vm.$nextTick();

    expect(axios.get).toHaveBeenCalledWith('https://mockapi.example.com/user');
    expect(wrapper.text()).toContain('Name: John Doe');
    expect(wrapper.text()).toContain('Email: john.doe@example.com');
  });

  it('displays an error message when API call fails', async () => {
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
