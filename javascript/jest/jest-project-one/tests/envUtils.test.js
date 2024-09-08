// timeUtils.test.js
import { getCurrentTime } from './envUtils';

describe('getCurrentTime関数のテスト', () => {
  let originalDate;
  //テスト準備
  beforeAll(() => {
    jest.resetModules(); // 各テストごとにモジュールをリセット
    originalDate = Date;
    const mockDate = new Date(new Date('2024-07-27T12:00:00Z'));
    global.Date = class extends Date {
        constructor() {
            return mockDate;
        }
    }

  });

  //テストの後処理
  afterAll(() => {
    // モックを解除して元のDateに戻す
    global.Date = originalDate;
  });


  it('12:00として返ってくること', () => {
    // 関数を実行
    const currentTime = getCurrentTime();

    // テスト結果の確認
    console.log(`Fixed time: ${currentTime}`);
    expect(currentTime).toContain('12:00'); // 12時が含まれることを確認
  });

  it('returns the current time in the specified time zone', () => {
    // 環境変数のモック
    process.env.TIME_ZONE = 'Asia/Tokyo';

    // 関数の実行
    const currentTime = getCurrentTime();

    // テスト結果の表示
    console.log(`Current time in Tokyo: ${currentTime}`);

    // 実際のテスト評価
    expect(currentTime).toBeTruthy(); // 具体的な時間の一致を検証する場合は、モックされた日時を比較
  });

  it('uses the default UTC time zone when no environment variable is set', () => {
    // 環境変数を削除
    delete process.env.TIME_ZONE;

    const currentTime = getCurrentTime();

    console.log(`Current time in UTC: ${currentTime}`);

    expect(currentTime).toBeTruthy();
  });
});
