// 環境変数を使った関数
export function getCurrentTime() {
    const timeZone = process.env.TIME_ZONE || 'UTC'; // 環境変数でタイムゾーンを設定、デフォルトはUTC
    const now = new Date().toLocaleString('en-US', { timeZone });
    return now;
  }