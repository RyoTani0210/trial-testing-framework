import json
import argparse

# コマンドライン引数のパーサーを設定
parser = argparse.ArgumentParser(description='整形するJSONファイルの入力と出力を指定します。')
parser.add_argument('input_file', type=str, help='入力JSONファイルのパス')
parser.add_argument('output_file', type=str, help='出力整形JSONファイルのパス')

args = parser.parse_args()

# JSONファイルの読み込み
with open(args.input_file, 'r') as json_file:
    data = json.load(json_file)

# 読みやすい形式に整形してファイルに書き込む
with open(args.output_file, 'w') as pretty_json_file:
    json.dump(data, pretty_json_file, indent=4)
