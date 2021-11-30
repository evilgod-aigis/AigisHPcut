//1000行超えるとは思わなんだ_:(´ཀ`」∠):_
//2000行超えちゃったよ･･･0(:3　)～ ('､3_ヽ)_

//初動短縮リスト
const rWTlistElem = [
    {
        id: null, buffer: 'エンプレス', awaken: '未覚醒', showAwaken: false,
        rate: 15, disabled: false,
        AndOr: 'or', target: [ { '-': [] } ],
        tooltip: '[編成バフ] 全味方の初動-15%'
    },
    {
        id: null, buffer: 'アウトクラトール', awaken: '覚醒', showAwaken: false,
        rate: 20, disabled: false,
        AndOr: 'or', target: [ { '-': [] } ],
        tooltip: '[編成バフ] 全味方の初動-20%'
    },
    {
        id: null, buffer: '発明家', awaken: '未覚醒', showAwaken: false,
        rate: 20, disabled: true,
        AndOr: 'or', target: [ { 'attribution': [ '機械' ] } ],
        tooltip: '[編成バフ] 属性：機械の初動-20%'
    },
    {
        id: null, buffer: '大発明家', awaken: '覚醒', showAwaken: false,
        rate: 30, disabled: true,
        AndOr: 'or', target: [ { 'attribution': [ '機械' ] } ],
        tooltip: '[編成バフ] 属性：機械の初動-30%'
    },
    {
        id: null, buffer: '白浴衣の弓乙女ナナリー', awaken: '覚醒', showAwaken: false,
        rate: 15, disabled: false,
        AndOr: 'or', target: [ { 'rarity': [ '白', '青', '金', '銀', '銅' ] } ],
        tooltip: '[編成バフ] レアリティ：白以下の初動-15%'
    },
    {
        id: null, buffer: '陰陽師タマミ', awaken: '覚醒', showAwaken: false,
        rate: 25, disabled: false,
        AndOr: 'or', target: [ { 'rarity': [ '白' ] } ],
        tooltip: '[編成バフ] レアリティ：白の初動-25%'
    },
    {
        id: null, buffer: 'ロゼット', awaken: '未覚醒', showAwaken: false,
        rate: 30, disabled: true,
        AndOr: 'or', target: [ { 'rarity': [ '銀' ] } ],
        tooltip: '[編成バフ] レアリティ：銀の初動-30%'
    },
    {
        id: null, buffer: '波斬りの剣士サンドラ', awaken: '覚醒', showAwaken: false,
        rate: 30, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [ 'ソードマスター系', 'ちびソードマスター', 'ちび剣聖', 'ソードマスター', '剣聖', 'デッドリーエッジ', '剣神' ] },
            { 'attribution': [ 'サマー' ] }
        ],
        tooltip:
        '[編成バフ] クラス：ソードマスター系、<br>\
         　　　　　 属性：サマーの初動-30%'
    },
    {
        id: null, buffer: '竜姫婚姻譚メリュジアナ', awaken: '未覚醒', showAwaken: true,
        rate: 20, disabled: false,
        AndOr: 'or', target: [
            { 'attribution': [ 'ジューンブライド', '竜族' ] },
            { 'note': [ 'ドラゴンライダー系' ] }
        ],
        tooltip:
        '[編成バフ] 属性：ジューンブライド・<br>\
         　　　　　 竜族(ドラゴンライダー系含)の初動-20%'
    },
    {
        id: null, buffer: '竜姫婚姻譚メリュジアナ', awaken: '覚醒', showAwaken: true,
        rate: 25, disabled: false,
        AndOr: 'or', target: [
            { 'attribution': [ 'ジューンブライド', '竜族' ] },
            { 'note': [ 'ドラゴンライダー系' ] }
        ],
        tooltip:
        '[編成バフ] 属性：ジューンブライド・<br>\
         　　　　　 竜族(ドラゴンライダー系含)の初動-25%'
    }
];
//再動短縮(近・遠・両)
const rCTdepTypeElem = [
    {
        id: null, deployType: '近接型', rate: 0
    },
    {
        id: null, deployType: '遠距離型', rate: 0
    },
    {
        id: null, deployType: '遠近両型', rate: 0
    }
];
//再動短縮リスト
const rCTlistElem = [
    {
        id: null, buffer: '妖狐絢爛', awaken: '覚2a', showAwaken: false,
        rate: 50, disabled: false,
        AndOr: 'or', target: [ { 'attribution': [ '妖怪' ] } ],
        tooltip: '[配置バフ] 属性：妖怪の再動-50%'
    },
    {
        id: null, buffer: 'メイガスアデプト', awaken: '覚2a', showAwaken: false,
        rate: 50, disabled: false,
        AndOr: 'or', target: [ { 'attribution': [ '魔術師' ] } ],
        tooltip: '[配置バフ] 属性：魔術師の再動-50%'
    },
    {
        id: null, buffer: '天穿の槍士フィロ', awaken: '覚醒', showAwaken: false,
        rate: 50, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [
                'ランスマスター系', 'ちびランスマスター', 'ちび槍聖', 'ランスマスター', '槍聖', 'レイジランサー', '槍神',
                'ワルキューレ系', 'ちびワルキューレ', 'ちびブリュンヒルデ', 'ワルキューレ', 'ユニコーンナイト', 'ブリュンヒルデ', 'レギンレイヴ', 'ゲイレルル',
                'ロイヤルガード系', 'ちびロイヤルガード', 'ちびロイヤルオーダー', 'ロイヤルガード', 'ロイヤルオーダー', 'ロードオブロイヤルズ', 'セイクリッドガード'
            ] }
        ],
        tooltip:
        '[配置バフ] クラス：ランスマスター系・<br>\
         　　　　　 ワルキューレ系・ロイヤルガード系の再動-50%'
    },
    {
        id: null, buffer: '犬神ツムジ', awaken: '覚醒', showAwaken: false,
        rate: 50, disabled: false,
        AndOr: 'or', target: [
            { 'unitClass': [
                '犬神系', 'ちび犬神', 'ちび犬神頭', '犬神', '犬神頭',
                '陰陽師系', 'ちび陰陽師', 'ちび陰陽頭', '陰陽師', '陰陽頭', '悟徳陰陽頭', '召鬼陰陽頭',
                '邪仙系', 'ちび邪仙', 'ちび大邪仙', '邪仙', '大邪仙',
                '呪術使い系', 'ちび呪術使い', 'ちび大呪術師長', '呪術使い', '呪術師', '大呪術師長', '大呪術師祖', '妖厄神'
            ] }
        ],
        tooltip:
        '[配置バフ] クラス：犬神系・陰陽師系・<br>\
         　　　　　 邪仙系・呪術使い系の再動-50%'
    },
    {
        id: null, buffer: '約束の花嫁ディエーラ', awaken: '覚醒', showAwaken: false,
        rate: 45, disabled: false,
        AndOr: 'or', target: [ { 'attribution': [ 'ジューンブライド' ] } ],
        tooltip: '[配置バフ] 属性：ジューンブライドの再動-45%'
    },
    {
        id: null, buffer: 'ねこみみ購買部ミネット', awaken: '覚醒', showAwaken: false,
        rate: 40, disabled: true,
        AndOr: 'or', target: [ { 'attribution': [ '学園' ] } ],
        tooltip: '[配置バフ] 属性：学園の再動-40%'
    }
];
//スキル時間延長リスト
const skillExtendListElem = [
    {
        id: null, buffer: '時空魔法の優等生トワ', awaken: '未覚醒', showAwaken: true,
        rate: 10, disabled: false,
        AndOr: 'or', target: [ { 'deployType': [ '遠距離型' ] } ],
        tooltip: '[編成バフ] 遠距離ユニットのスキル時間+10%'
    },
    {
        id: null, buffer: '時空魔法の優等生トワ', awaken: '覚醒', showAwaken: true,
        rate: 15, disabled: false,
        AndOr: 'or', target: [ { 'deployType': [ '遠距離型' ] } ],
        tooltip: '[編成バフ] 遠距離ユニットのスキル時間+15%'
    },
    {
        id: null, buffer: '天馬騎士団長エスタ', awaken: '未覚醒', showAwaken: true,
        rate: 20, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [ 'ペガサスライダー系', 'ちびペガサスライダー', 'ちびペガサスロード', 'ペガサスライダー', 'ペガサスナイト', 'ペガサスロード', 'スカイキャバリア', 'ペガサスマスター' ] }
        ],
        tooltip: '[編成バフ] クラス：ペガサスライダー系のスキル時間+20%'
    },
    {
        id: null, buffer: '天馬騎士団長エスタ', awaken: '覚醒', showAwaken: true,
        rate: 50, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [ 'ペガサスライダー系', 'ちびペガサスライダー', 'ちびペガサスロード', 'ペガサスライダー', 'ペガサスナイト', 'ペガサスロード', 'スカイキャバリア', 'ペガサスマスター' ] }
        ],
        tooltip: '[編成バフ] クラス：ペガサスライダー系のスキル時間+50%'
    },
    {
        id: null, buffer: '暗黒騎士', awaken: '覚醒', showAwaken: false,
        rate: 30, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [ 'ダークファイター系', 'ちびダークファイター', 'ちびパラディン', 'ダークファイター', 'ダークナイト', 'パラディン', 'マスターパラディン', 'カオスナイト' ] }
        ],
        tooltip: '[編成バフ] クラス：ダークファイター系のスキル時間+30%'
    },
    {
        id: null, buffer: '提督リーンベル', awaken: '覚醒', showAwaken: false,
        rate: 30, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [ 'セーラー系', 'ちびセーラー', 'ちびセーラーエリート', 'セーラー', 'セーラーチーフ', 'セーラーエリート', 'アドミラル', 'ドレッドノート' ] }
        ],
        tooltip: '[編成バフ] クラス：セーラー系のスキル時間+30%'
    },
    {
        id: null, buffer: '弓騎兵カティナ', awaken: '覚醒', showAwaken: false,
        rate: 20, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [ 'ボウライダー系', 'ちびボウライダー', 'ちびボウライダーエリート', 'ボウライダー', 'ボウライダーチーフ', 'ボウライダーエリート', 'ボウライダーマスター', 'ボウストームキャバリア' ] }
        ],
        tooltip: '[編成バフ] クラス：ボウライダー系のスキル時間+20%'
    },
    {
        id: null, buffer: '術士女官シャーリー', awaken: '未覚醒', showAwaken: true,
        rate: 20, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [ 'メイジ系', '下級メイジ', 'ちびメイジ', 'ちびアークメイジ', 'メイジ', 'ウォーロック', 'アークメイジ', 'メイガスアデプト', 'メイジデストラクト' ] }
        ],
        tooltip: '[編成バフ] クラス：メイジ系のスキル時間+20%'
    },
    {
        id: null, buffer: '術士女官シャーリー', awaken: '覚醒', showAwaken: true,
        rate: 30, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [ 'メイジ系', '下級メイジ', 'ちびメイジ', 'ちびアークメイジ', 'メイジ', 'ウォーロック', 'アークメイジ', 'メイガスアデプト', 'メイジデストラクト' ] }
        ],
        tooltip: '[編成バフ] クラス：メイジ系のスキル時間+30%'
    },
    {
        id: null, buffer: '召使いアイリーン', awaken: '-', showAwaken: false,
        rate: 20, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [ 'ローグ系', 'ちびローグ', 'ちびマスターアサシン', 'ローグ', 'アサシン', 'マスターアサシン', 'ナイトアサシン', 'エンフォーサー' ] }
        ],
        tooltip: '[編成バフ] クラス：ローグ系のスキル時間+20%'
    },
    {
        id: null, buffer: '悪魔召喚士リヴル', awaken: '覚醒', showAwaken: false,
        rate: 20, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [ 'デモンサモナー系', 'ちびデモンサモナー', 'ちびデモンマスター', 'デモンサモナー', 'デモンマスター', 'デモンルーラー', 'デモンブリンガー' ] }
        ],
        tooltip: '[編成バフ] クラス：デモンサモナー系のスキル時間+20%'
    },
    {
        id: null, buffer: '風水士ピピン', awaken: '覚醒', showAwaken: false,
        rate: 20, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [ '風水使い系', 'ちび風水使い', 'ちび風水導士', '風水使い', '風水士', '風水導士', '風水仙人', '八門風水導士' ] }
        ],
        tooltip: '[編成バフ] クラス：風水使い系のスキル時間+20%'
    }
];
//硬直短縮(編成バフ)リスト
const hasteTeemListElem = [
    {
        id: null, buffer: '時の調停者トワ', awaken: '-', showAwaken: false,
        rate: 20, disabled: false,
        AndOr: 'or', target: [ { '-': [] } ],
        tooltip: '[編成バフ] 全味方の攻撃硬直-20%'
    },
    {
        id: null, buffer: '帝国辺境総督アレイダ', awaken: '未覚醒', showAwaken: true,
        rate: 25, disabled: true,
        AndOr: 'and', target: [ { 'deployType': [ '近接型' ] }, { 'attribution': [ '白の帝国' ] } ],
        tooltip: '[編成バフ] 属性：帝国の近接ユニットの攻撃硬直-25%'
    },
    {
        id: null, buffer: '帝国辺境総督アレイダ', awaken: '覚醒', showAwaken: true,
        rate: 35, disabled: true,
        AndOr: 'and', target: [ { 'deployType': [ '近接型' ] }, { 'attribution': [ '白の帝国' ] } ],
        tooltip: '[編成バフ] 属性：帝国の近接ユニットの攻撃硬直-35%'
    },
    {
        id: null, buffer: '雷光の魔剣士タラニア', awaken: '覚醒', showAwaken: false,
        rate: 20, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [
                '魔法剣士系', 'ちび魔法剣士', 'ちびルーンロード', '魔法剣士', 'ルーンフェンサー', 'ルーンロード', 'ルーンデルヴァー', 'ルーンスレイヤー',
                'メイジ系', '下級メイジ', 'ちびメイジ', 'ちびアークメイジ', 'メイジ', 'ウォーロック', 'アークメイジ', 'メイガスアデプト', 'メイジデストラクト'
            ] }
        ],
        tooltip: '[編成バフ] クラス：魔法剣士系・メイジ系の攻撃硬直-20%'
    },
    {
        id: null, buffer: '砲術教官エイプリル', awaken: '覚醒', showAwaken: false,
        rate: 30, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [
                '砲術士系', 'ちび砲術士', 'ちびキャノンマスター', '砲術士', '重砲士', 'キャノンマスター', 'ハイキャノンマスター', '超重巨砲士',
                '重装砲兵系', 'ちび重装砲兵', 'ちびギガキャノンアーマー', '重装砲兵', 'キャノンアーマー', 'ギガキャノンアーマー', 'バスターアーマー', 'フォートレス',
                'モンスタースレイヤー系'
            ] }
        ],
        tooltip:
        '[編成バフ] クラス：砲術士系・重装砲兵系・<br>\
         　　　　　 モンスタースレイヤー系の攻撃硬直-30%'
    },
    {
        id: null, buffer: '湯けむり吸血鬼エマ', awaken: '-', showAwaken: false,
        rate: 20, disabled: true,
        AndOr: 'or', target: [ { 'attribution': [ 'アンデッド', '温泉' ] } ],
        tooltip: '[編成バフ] 属性：アンデッド・温泉の攻撃硬直-20%'
    },
    {
        id: null, buffer: '恋慕の堕天使ソフィー', awaken: '覚醒', showAwaken: false,
        rate: 40, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [
                '王子', '王子【神器装備】', '王子【ケラウノス】', '王子【砂漠】', '王子【獣装】',
                '王子【巨像】', '王子【風護】', '王子【英魂】', '王子【ダーク】', '王子【英雄王】',
                '王子【四神】', '王子【神槍】', '王子【ナンディ】', '王子【海鎮】', '王子【幼少】', 'ちび王子'
            ] }
        ],
        tooltip: '[編成バフ] 自身と王子の攻撃硬直-40%'
    }
];
//硬直短縮(スキル)リスト
const hasteSkillListElem = [
    {
        id: null, buffer: '付与魔術師ハーニィ', awaken: '通常', showAwaken: false,
        atkCooldown: 11, disabled: false,
        AndOr: 'or', target: [ { 'deployType': [ '近接型' ] } ],
        tooltip: '[スキルバフ] 近接ユニットの攻撃硬直6f化(範囲内)'
    },
    {
        id: null, buffer: '弓兵の湯浴みソーマ', awaken: '覚醒', showAwaken: false,
        atkCooldown: 4, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [ 'アーチャー系', '下級アーチャー', 'ちびアーチャー', 'ちびアルテミス', 'アーチャー', 'スナイパー', 'アルテミス', 'セレーネ', 'ラピッドシューター' ] }
        ],
        tooltip: '[スキルバフ] クラス：アーチャー系の攻撃硬直2f化(通常)'
    },
    {
        id: null, buffer: '時の調停者トワ', awaken: '通常', showAwaken: true,
        atkCooldown: 11, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [
                'ウィッチ系', 'ちびウィッチ', 'ちびアークウィッチ', 'ウィッチ', 'ロードウィッチ', 'アークウィッチ', 'ホーリーウィッチ', 'ソーサレス',
                'クロノウィッチ系', 'ちびクロノウィッチ', 'ちびアーククロノウィッチ', 'クロノウィッチ', 'アーククロノウィッチ', 'クロノマスター', 'クロノマンサー'
            ] }
        ],
        tooltip:
        '[スキルバフ] クラス：ウィッチ系・<br>\
         　　　　　　 クロノウィッチ系の攻撃硬直6f化(範囲内)'
    },
    {
        id: null, buffer: '時の調停者トワ', awaken: '覚醒', showAwaken: true,
        atkCooldown: 11, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [
                'メイジ系', '下級メイジ', 'ちびメイジ', 'ちびアークメイジ', 'メイジ', 'ウォーロック', 'アークメイジ', 'メイガスアデプト', 'メイジデストラクト',
                'ウィッチ系', 'ちびウィッチ', 'ちびアークウィッチ', 'ウィッチ', 'ロードウィッチ', 'アークウィッチ', 'ホーリーウィッチ', 'ソーサレス',
                'クロノウィッチ系', 'ちびクロノウィッチ', 'ちびアーククロノウィッチ', 'クロノウィッチ', 'アーククロノウィッチ', 'クロノマスター', 'クロノマンサー'
            ] }
        ],
        tooltip:
        '[スキルバフ] クラス：メイジ系・ウィッチ系・<br>\
         　　　　　　 クロノウィッチ系の攻撃硬直6f化(範囲内)'
    },
    {
        id: null, buffer: '胡喜美', awaken: '通常', showAwaken: false,
        atkCooldown: 21, disabled: true,
        AndOr: 'or', target: [ { 'attribution': [ '仙人' ] } ],
        tooltip: '[スキルバフ] 属性：仙人の攻撃硬直11f化'
    },
    {
        id: null, buffer: '秋祭の大魔女デスピア', awaken: '通常', showAwaken: false,
        atkCooldown: 11, disabled: true,
        AndOr: 'or', target: [ { 'attribution': [ 'ハロウィン' ] } ],
        tooltip: '[スキルバフ] 属性：ハロウィンの攻撃硬直6f化'
    },
    {
        id: null, buffer: '聖夜の炸裂海賊デューオ', awaken: '通常', showAwaken: false,
        atkCooldown: 16, disabled: true,
        AndOr: 'or', target: [ { 'attribution': [ 'クリスマス' ] } ],
        tooltip: '[スキルバフ] 属性：クリスマスの攻撃硬直8f化'
    },
    {
        id: null, buffer: 'お祭り夕涼みココロ', awaken: '覚醒', showAwaken: false,
        atkCooldown: 11, disabled: true,
        AndOr: 'and', target: [ { 'deployType': [ '遠距離型' ] }, { 'attribution': [ 'サマー' ] } ],
        tooltip: '[スキルバフ] 属性：サマーの遠距離ユニットの攻撃硬直6f化'
    },
    {
        id: null, buffer: '叡智の杖', awaken: '-', showAwaken: false,
        atkCooldown: 21, disabled: false,
        AndOr: 'or', target: [ { 'attribution': [ '魔術師' ] } ],
        tooltip: '[スキルバフ] 属性：魔術師の攻撃硬直11f化'
    }
];
//特攻付与リスト
const giveDmgMulListElem = [
    {
        id: null, buffer: '奇想の発明家タバサ', awaken: '通常', showAwaken: true,
        dmgMul: 1.1, disabled: false,
        AndOr: 'or', target: [ { '-': [] } ],
        tooltip: '[編成バフ] 神獣・魔獣・妖獣・獣・獣人・水棲に対して<br>\
        　　　　　 全味方の攻撃力が10%上昇'
    },
    {
        id: null, buffer: '奇想の発明家タバサ', awaken: '覚醒', showAwaken: true,
        dmgMul: 1.15, disabled: false,
        AndOr: 'or', target: [ { '-': [] } ],
        tooltip: '[編成バフ] 神獣・魔獣・妖獣・獣・獣人・水棲に対して<br>\
        　　　　　 全味方の攻撃力が15%上昇'
    },
    {
        id: null, buffer: '帝国発明家ヘンドリカ', awaken: '通常', showAwaken: true,
        dmgMul: 1.1, disabled: false,
        AndOr: 'or', target: [ { '-': [] } ],
        tooltip: '[編成バフ] 天使に対して全味方の攻撃力が10%上昇'
    },
    {
        id: null, buffer: '帝国発明家ヘンドリカ', awaken: '覚醒', showAwaken: true,
        dmgMul: 1.15, disabled: false,
        AndOr: 'or', target: [ { '-': [] } ],
        tooltip: '[編成バフ] 天使に対して全味方の攻撃力が15%上昇<br>\
        　　　　　 竜族に対して属性：帝国の攻撃力が15%上昇<br>\
        　　　　　 (敵の属性は特に指定してないので、2行目は特に意味ない)'
    }
];
//鈍化(マップ)軽減リスト
const redMapEffListElem = [
    {
        id: null, buffer: '王子【海鎮】', awaken: null, showAwaken: false,
        map: '深海', rate: 50, disabled: false,
        AndOr: 'or', target: [ { '-': [] } ],
        tooltip: '[配置] 全味方の深海の影響を50%軽減'
    },
    {
        id: null, buffer: '紫鱗の海巫女ハルフゥ', awaken: '覚醒', showAwaken: false,
        map: '深海', rate: 30, disabled: false,
        AndOr: 'or', target: [ { '-': [] } ],
        tooltip: '[編成] 全味方の深海の影響を30%軽減'
    }
];

//自己バフ
//初動短縮リスト
const self_rWTlistElem = [
    { id: null, buffer: 'ナイトアサシン', rate: 50 },
    { id: null, buffer: 'エンフォーサー', rate: 50 },
    { id: null, buffer: '雷光の魔剣士タラニア', rate: 50 },
    { id: null, buffer: '主天使セフィーレ', rate: 60 },
    { id: null, buffer: '堕天系お掃除当番クロエ', rate: 50 },
    { id: null, buffer: '帝国機甲士クリスタ', rate: 30 },
    { id: null, buffer: '封機の剣士エレカ', rate: 60 },
    { id: null, buffer: '信仰の槍士コルム', rate: 50 },
    { id: null, buffer: '帝国魔術師イルマ', rate: 50 },
    { id: null, buffer: '炎のサンタ召喚士ソラノ', rate: 40 },
    { id: null, buffer: '甘美な踊り子マーニー', rate: 60 },
    { id: null, buffer: '恋の応援団シャルキー', rate: 70 },
    { id: null, buffer: 'お祭り夕涼みココロ', rate: 50 },
    { id: null, buffer: '氷霊応援団ユキヒメ', rate: 60 },
    { id: null, buffer: '妖狸スズネ', rate: 20 },
    { id: null, buffer: '筆頭飛行士オヴェリー', rate: 40 }
];
//再動短縮リスト
const self_rCTlistElem = [
    { id: null, buffer: 'ギガントハンマー', rate: 45 },
    { id: null, buffer: 'ダイショーグン', rate: 45 },
    { id: null, buffer: '修羅', rate: 45 },
    { id: null, buffer: 'ボウライダーマスター', rate: 45 },
    { id: null, buffer: 'デッドリーエッジ', rate: 40 },
    { id: null, buffer: '剣神', rate: 40 },
    { id: null, buffer: '天魔天狗', rate: 45 },
    { id: null, buffer: 'ラピッドシューター', rate: 45 },
    { id: null, buffer: 'ネプチューン', rate: 45 },
    { id: null, buffer: '悟得陰陽頭', rate: 45 },
    { id: null, buffer: 'クロノマスター', rate: 45 },
    { id: null, buffer: 'ヘビートリガー', rate: 45 },
    { id: null, buffer: '聖女イリス', rate: 40 }
];
//スキル時間延長リスト
const self_skillExtendListElem = [
    { id: null, buffer: 'イモータルオリジン', rate: 30 },
    { id: null, buffer: 'ファフニール', rate: 20 },
    { id: null, buffer: 'ダイショーグン', rate: 30 },
    { id: null, buffer: 'ペガサスマスター', rate: 70 },
    { id: null, buffer: 'アズライール', rate: -20 },
    { id: null, buffer: 'ドールマスター', rate: 30 },
    { id: null, buffer: 'アドミラル', rate: 30 },
    { id: null, buffer: '神仙', rate: 50 },
    { id: null, buffer: '天魔天狗', rate: 25 },
    { id: null, buffer: 'オンスロート', rate: 30 },
    { id: null, buffer: 'アビスレイダー', rate: 30 },
    { id: null, buffer: 'ソーサレス', rate: 30 },
    { id: null, buffer: 'ロードオブヘルメス', rate: 30 },
    { id: null, buffer: 'ヘビートリガー', rate: 30 },
    { id: null, buffer: '魔導鎧娘アルマ', rate: 20 },
    { id: null, buffer: '伏龍の軍師アイシャ', rate: 20 },
    { id: null, buffer: '水霊使いセノーテ', rate: 15 }
];
//硬直短縮(編成バフ)リスト
const self_hasteTeemListElem = [
    { id: null, buffer: '鉄泉の守護者レアン', rate: 40 },
    { id: null, buffer: '晴着の看板娘ジュノン', rate: 40 },
    { id: null, buffer: '恋慕の堕天使ソフィー', rate: 40 },
    { id: null, buffer: '水龍騎士スイレン', rate: 50 },
    { id: null, buffer: '屍骸道士ランファ', rate: 60 }
];
//鈍化(マップ)軽減リスト
const self_redMapEffListElem = [
    { id: null, buffer: 'セーラー系', map: '深海', rate: 50 },
    { id: null, buffer: 'ちびセーラー', map: '深海', rate: 50 },
    { id: null, buffer: 'ちびセーラーエリート', map: '深海', rate: 50 },
    { id: null, buffer: 'セーラー', map: '深海', rate: 50 },
    { id: null, buffer: 'セーラーチーフ', map: '深海', rate: 50 },
    { id: null, buffer: 'セーラーエリート', map: '深海', rate: 50 },
    { id: null, buffer: 'アドミラル', map: '深海', rate: 50 },
    { id: null, buffer: 'ドレッドノート', map: '深海', rate: 50 },
    { id: null, buffer: 'パイレーツ系', map: '深海', rate: 50 },
    { id: null, buffer: '下級パイレーツ', map: '深海', rate: 50 },
    { id: null, buffer: 'ちびパイレーツ', map: '深海', rate: 50 },
    { id: null, buffer: 'ちびキングオブパイレーツ', map: '深海', rate: 50 },
    { id: null, buffer: 'パイレーツ', map: '深海', rate: 50 },
    { id: null, buffer: 'キャプテン', map: '深海', rate: 50 },
    { id: null, buffer: 'キングオブパイレーツ', map: '深海', rate: 50 },
    { id: null, buffer: 'ネプチューン', map: '深海', rate: 50 },
    { id: null, buffer: 'エル・ドラゴ', map: '深海', rate: 50 }
];

//遠近両型の強化対象としての扱い
const depTypeCountElem = {
    '近接型': [
        'スカイウォリアー系', '下級スカイウォリアー', 'ちびスカイウォリアー', 'ドレッドウィング', 'スカイウォリアー', 'スカイウォリアーチーフ', 'ドレッドウィング',
        'スカウト系', 'ちびスカウト', 'ちびスカウトオフィサー', 'スカウト', 'スカウトオフィサー'
    ],
    '遠距離型': [
        'ロケットトルーパー系', 'ちびロケットトルーパー', 'ちびジェットトルーパー', 'ロケットトルーパー', 'ジェットトルーパー',
        'スカイシューター系', '下級スカイシューター', 'ちびスカイシューター', 'ちびアローウィング', 'スカイシューター', 'スカイシューターチーフ', 'アローウィング'
    ]
};
//特殊なスキル初動(特に黒)
const specialWTlistElem = [
    { unitName: '魔導鎧姫グレース', rarity: '黒', skillAwaken: '覚醒', WT: 0 },
    { unitName: '万刃を担う者アルヴァ', rarity: '黒', skillAwaken: '覚醒', WT: 0 }
];
//特殊な好感度ボーナス%
const specialAffListElem = {
    '再動短縮': {
        '黒': {},
        '白': {},
        '金': {
            0.12: [ 'ちびイブキ', 'ちびナタク', 'ちびアイシャ', 'ちびメル' ],
            0.15: [
                '新米狩人ピックル', 'ちびキャリー', 'ちびクリッサ', 'ちびオリヴィエ', 'ちびヴルム', 'ちびウェンディ',
                'ちびカヨウ', 'ちびキュウビ', 'ちびオーガスタ', 'ちびスピカ', 'ちびフレデリカ'
            ],
            0.16: [ '姫装山賊モーティマ', '竜騎士アベル', '黒衣のサイラス' ]
        }
    },
    '時間延長': {
        '黒': {
            0.23: [ '赤き盗賊花嫁ベルナ', '降魔の復讐者ノワール', '鬼刃忍タチバナ', '至宝の使い手リアナ', '翠花の領主メアリ' ]
        },
        '白': {},
        '金': {
            0.15: [ 'ちびマツリ', 'ちびセーラ', 'ちび鬼刃姫', 'ちびティニー', 'ちびリアナ', 'ちびクラリーチェ', 'ちびコハル' ]
        }
    },
    '攻撃硬直': {
        '黒': {
            0.17: [ '純白の花嫁カルマ', '夜鳥ツグミ', '花嫁姿の召喚士ファルネ', '冥霊たちの夏メルアビス', '錬金調合師ニコル' ]
        },
        '白': {},
        '金': {
            0.10: [
                'ちびディーナ', 'ちびエレイン', 'ちびセシリー', 'ちびジュノン', 'ちびロゼット', 'ちびエルドラ' ,'ちびリディ',
                'ちびアリス', 'ちびイングリッド', 'ちびソフィー', 'ちびコノハ', 'ちびリュクス', 'ちびアーシェラ',
                'ちびメーリス', 'ちびイリス', 'ちびメープル', 'ちびアンリ'
            ],
            0.12: [ '海賊番長ジョヴァンニ' ]
        }
    }
};

//ユニットリスト
const unitsList_onSkillActElem = [
    {
        id: null,
        unitInfo: {
            unitName: '九尾狐カヨウ', deployType: '近接型', rarity: '黒',
            unitClass: {
                selectable: true, selected: '妖狐絢爛',
                options: [ '妖狐系', '妖狐絢爛' ]
            },
            attribution: [ '妖怪', '東の国' ],
            affection: { percentage: 150, bonus: '再動短縮', changeRate: null },
            note: [ '女性' ]
        },
        skill: {
            awaken: {
                selectable: false, selected: '覚醒',
                options: [ '通常', '覚醒' ]
            },
            target: [ null, '全員' ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncurr: [ { A: 22, B: null }, { A: 10, B: 30 } ],
            dur: { A: null, B: null },
            dur_uncurr: [ { A: 30, B: null }, { A: 3, B: 30 } ],
            firstTime: null, interval: null,
            trigger: [ null, 'A' ], trans: [ '-', '交互' ], HPred: [ 0, 20 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ '-', '-' ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        unitInfo: {
            unitName: '黒紫の巫女キキョウ', deployType: '遠距離型', rarity: '黒',
            unitClass: {
                selectable: false, selected: 'シャーマン系',
                options: [ 'シャーマン系' ]
            },
            attribution: [ '人間', '東の国' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null },
            note: [ '女性' ]
        },
        skill: {
            awaken: {
                selectable: false, selected: '覚醒',
                options: [ '通常', '覚醒' ]
            },
            target: [ null, '全敵' ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncurr: [ { A: 15, B: 15 }, { A: 15, B: 15 } ],
            dur: { A: null, B: null },
            dur_uncurr: [ { A: 1, B: 1 }, { A: 10, B: 20 } ],
            firstTime: null, interval: null,
            trigger: [ null, 'B' ], trans: [ '交互', '交互' ], HPred: [ 0, 5 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ '-', '-' ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        unitInfo: {
            unitName: '迎春の呪姫オロチヒメ', deployType: '遠距離型', rarity: '黒',
            unitClass: {
                selectable: false, selected: '呪術使い系',
                options: [ '呪術使い系' ]
            },
            attribution: [ '人間', 'お正月' ],
            affection: { percentage: 150, bonus: '再動短縮', changeRate: null },
            note: [ '女性', '状態異常無効' ]
        },
        skill: {
            awaken: {
                selectable: false, selected: '通常',
                options: [ '通常', '覚醒' ]
            },
            target: [ '全敵', '6-7体' ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncurr: [ { A: 50, B: null }, { A: 55, B: null } ],
            dur: { A: null, B: null },
            dur_uncurr: [ { A: 30, B: null }, { A: 40, B: null } ],
            firstTime: null, interval: null,
            trigger: [ '-', 'スキル中hit' ], trans: [ '-', '-' ], HPred: [ 15, 2 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ '-', '-' ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        unitInfo: {
            unitName: '混沌霊使いニーヴ', deployType: '遠距離型', rarity: '黒',
            unitClass: {
                selectable: false, selected: 'エレメンタラー系',
                options: [ 'エレメンタラー系' ]
            },
            attribution: [ '人間' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null },
            note: [ '女性' ]
        },
        skill: {
            awaken: {
                selectable: false, selected: '通常',
                options: [ '通常', '覚醒' ]
            },
            target: [ '射程内', null ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncurr: [ { A: 10, B: null }, { A: 80, B: null } ],
            dur: { A: null, B: null },
            dur_uncurr: [ { A: 2, B: null }, { A: Infinity, B: null } ],
            firstTime: null, interval: null,
            trigger: [ '-', null ], trans: [ '-', '-' ], HPred: [ 10, 0 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ '-', '-' ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        unitInfo: {
            unitName: '猫又コハル', deployType: '遠距離型', rarity: '黒',
            unitClass: {
                selectable: false, selected: '猫又系',
                options: [ '猫又系' ]
            },
            attribution: [ '妖怪', '東の国' ],
            affection: { percentage: 100, bonus: '時間延長', changeRate: null },
            note: [ '女性' ]
        },
        skill: {
            awaken: {
                selectable: false, selected: '通常',
                options: [ '通常', '覚醒' ]
            },
            target: [ '全敵', null ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncurr: [  { A: 70, B: null }, { A: 60, B: null } ],
            dur: { A: null, B: null },
            dur_uncurr: [ { A: 30, B: null }, { A: 30, B: null } ],
            firstTime: null, interval: null,
            trigger: [ '-', null ], trans: [ '-', '-' ], HPred: [ 16, 0 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ '-', '-' ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        unitInfo: {
            unitName: '清心の花嫁スイレン', deployType: '近接型', rarity: '白',
            unitClass: {
                selectable: false, selected: 'ドラゴンライダー系',
                options: [ 'ドラゴンライダー系' ]
            },
            attribution: [ '人間', 'ジューンブライド' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null },
            note: [ '女性', 'ドラゴンライダー系' ]
        },
        skill: {
            awaken: {
                selectable: true, selected: '通常',
                options: [ '通常', '覚醒' ]
            },
            target: [ '射程内', '射程内' ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncurr: [ { A: 55, B: null }, { A: 50, B: 55 } ],
            dur: { A: null, B: null },
            dur_uncurr: [ { A: 1, B: null }, { A: 1, B: 1 } ],
            firstTime: null, interval: null,
            trigger: [ '-', 'B' ], trans: [ '-', '初回A' ], HPred: [ 20, 20 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ '-', '-' ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        unitInfo: {
            unitName: '召喚士アクアマリー', deployType: '遠距離型', rarity: '白',
            unitClass: {
                selectable: false, selected: 'サモナー系',
                options: [ 'サモナー系' ]
            },
            attribution: [ '人間', '魔術師' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null },
            note: [ '女性' ]
        },
        skill: {
            awaken: {
                selectable: true, selected: '覚醒',
                options: [ '通常', '覚醒' ]
            },
            target: [ '全敵', '全敵' ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncurr: [ { A: 25, B: null }, { A: 30, B: null } ],
            dur: { A: null, B: null },
            dur_uncurr: [ { A: 40, B: null }, { A: 25, B: null } ],
            firstTime: null, interval: null,
            trigger: [ '-', '-' ], trans: [ '-', '-' ], HPred: [ 15, 10 ],
            mulByNum: [ [ 1 ], [ 1, 1.5, 2, 2.5, 3 ] ],
            dmgMul: { opt: [ '-', '-' ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        unitInfo: {
            unitName: '魔神の共鳴者レライエ', deployType: '遠距離型', rarity: '白',
            unitClass: {
                selectable: false, selected: 'デモンシャーマン系',
                options: [ 'デモンシャーマン系' ]
            },
            attribution: [ '人間' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null },
            note: [ '女性', 'HP回復不可', '魔界適応' ]
        },
        skill: {
            awaken: {
                selectable: false, selected: '通常',
                options: [ '通常', '覚醒' ]
            },
            target: [ '全敵', null ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncurr: [ { A: 30, B: null }, { A: null, B: null } ],
            dur: { A: null, B: null },
            dur_uncurr: [ { A: 30, B: null }, { A: null, B: null } ],
            firstTime: null, interval: null,
            trigger: [ '-', null ], trans: [ '-', null ], HPred: [ 8, null ],
            mulByNum: [ [ 1 ], null ],
            dmgMul: { opt: [ '-', null ], mul: [ 1, null ], target: [ null, null ] }
        }
    },
    {
        id: null,
        unitInfo: {
            unitName: 'ちびコハル', deployType: '遠距離型', rarity: '金',
            unitClass: {
                selectable: false, selected: '猫又系',
                options: [ '猫又系' ]
            },
            attribution: [ '妖怪', '東の国', 'ちび' ],
            affection: { percentage: 100, bonus: '時間延長', changeRate: null },
            note: [ '女性' ]
        },
        skill: {
            awaken: {
                selectable: false, selected: '通常',
                options: [ '通常' ]
            },
            target: [ '全敵', null ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncurr: [  { A: 70, B: null }, { A: null, B: null } ],
            dur: { A: null, B: null },
            dur_uncurr: [ { A: 30, B: null }, { A: null, B: null } ],
            firstTime: null, interval: null,
            trigger: [ '-', null ], trans: [ '-', null ], HPred: [ 16, null ],
            mulByNum: [ [ 1 ], null ],
            dmgMul: { opt: [ '-', null ], mul: [ 1, null ], target: [ null, null ] }
        }
    },
    {
        id: null,
        unitInfo: {
            unitName: '祝祭の南瓜姫ミサ', deployType: '近接型', rarity: '黒',
            unitClass: {
                selectable: true, selected: 'イビルクイーン',
                options: [ 'イビルクイーン', 'イビルシーカー', 'デスブリンガー' ]
            },
            attribution: [ 'ハロウィン' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null },
            note: [ '女性', 'HP回復不可', '魔界適応' ]
        },
        skill: {
            awaken: {
                selectable: true, selected: '通常',
                options: [ '通常', '覚醒' ]
            },
            target: [ '全敵', '全敵' ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncurr: [ { A: 40, B: null }, { A: 35, B: null } ],
            dur: { A: null, B: null },
            dur_uncurr: [ { A: 40, B: null }, { A: Infinity, B: null } ],
            firstTime: null, interval: null,
            trigger: [ '-', '-' ], trans: [ '-', '-' ], HPred: [ 10, 10 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ 'なし', 'なし' ], mul: [ 1.5, 1.5 ], target: [ '人間', '人間' ] }
        }
    },
    {
        id: null,
        unitInfo: {
            unitName: '海魔の麗姫スキュレ', deployType: '近接型', rarity: '白',
            unitClass: {
                selectable: true, selected: 'デスブリンガー',
                options: [ 'イビルクイーン', 'デスブリンガー' ]
            },
            attribution: [ 'なし' ],
            affection: { percentage: 100, bonus: '時間延長', changeRate: null },
            note: [ '女性', 'HP回復不可', '魔界適応' ]
        },
        skill: {
            awaken: {
                selectable: true, selected: '覚醒',
                options: [ '通常', '覚醒' ]
            },
            target: [ '全敵', '全敵' ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncurr: [ { A: 35, B: null }, { A: 40, B: null } ],
            dur: { A: null, B: null },
            dur_uncurr: [ { A: 30, B: null }, { A: 30, B: null } ],
            firstTime: null, interval: null,
            trigger: [ '-', '-' ], trans: [ '-', '-' ], HPred: [ 10, 10 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ 'なし', 'なし' ], mul: [ 1.5, 2.5 ], target: [ '魔法敵', '魔法敵' ] }
        }
    },
    {
        id: null,
        unitInfo: {
            unitName: '狼剣の魔姫ピリカ', deployType: '近接型', rarity: '白',
            unitClass: {
                selectable: true, selected: 'デスブリンガー',
                options: [ 'イビルクイーン', 'デスブリンガー' ]
            },
            attribution: [ 'なし' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null },
            note: [ '女性', 'HP回復不可', '魔界適応' ]
        },
        skill: {
            awaken: {
                selectable: true, selected: '覚醒',
                options: [ '通常', '覚醒' ]
            },
            target: [ '全敵', '全敵' ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncurr: [ { A: 30, B: null }, { A: 40, B: null } ],
            dur: { A: null, B: null },
            dur_uncurr: [ { A: 20, B: null }, { A: 10, B: null } ],
            firstTime: null, interval: null,
            trigger: [ '-', '-' ], trans: [ '-', '-' ], HPred: [ 10, 10 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ '-', '-' ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        unitInfo: {
            unitName: '降魔の戦姫トコヨ', deployType: '近接型', rarity: '青',
            unitClass: {
                selectable: true, selected: 'イビルシーカー',
                options: [ 'イビルクイーン', 'イビルシーカー' ]
            },
            attribution: [ 'なし' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null },
            note: [ '女性', 'HP回復不可', '魔界適応' ]
        },
        skill: {
            awaken: {
                selectable: true, selected: '通常',
                options: [ '通常', '覚醒' ]
            },
            target: [ '全敵', '全敵' ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncurr: [ { A: 35, B: null }, { A: 45, B: null } ],
            dur: { A: null, B: null },
            dur_uncurr: [ { A: 10, B: null }, { A: 20, B: null } ],
            firstTime: null, interval: null,
            trigger: [ '-', '-' ], trans: [ '-', '-' ], HPred: [ 15, 15 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ '-', '-' ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    }
];
const unitsList_onHitElem = [
    {
        id: null,
        unitInfo: {
            unitName: '犬神シロ', deployType: '近接型', rarity: '黒',
            unitClass: {
                selectable: false, selected: '犬神系',
                options: [ '犬神系' ]
            },
            attribution: [ '妖怪', '東の国' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null },
            note: [ '女性' ],
            atkInterval: [
                { startup: null, remain: null, cooldown: null },
                { startup: null, remain: null, cooldown: null }
            ],
            atkInterval_uncurr: [
                { startup: null, remain: null, cooldown: null },
                { startup: 21, remain: 18, cooldown: 56 },
                { startup: 21, remain: 18, cooldown: 56 }
            ]
        },
        skill: {
            awaken: {
                selectable: true, selected: '通常',
                options: [ '通常', '覚醒' ]
            },
            target: [ '射程内', '射程内' ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncurr: [ { A: 35, B: null }, { A: 50, B: null } ],
            dur: { A: null, B: null },
            dur_uncurr: [ { A: 15, B: null }, { A: 70, B: null } ],
            firstTime: null, interval: null,
            trigger: [ 'スキル中hit', 'スキル中hit' ], trans: [ '-', '-' ], HPred: [ 4, 2 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ '-', '-' ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        unitInfo: {
            unitName: '犬神ツムジ', deployType: '近接型', rarity: '白',
            unitClass: {
                selectable: false, selected: '犬神系',
                options: [ '犬神系' ]
            },
            attribution: [ '妖怪', '東の国' ],
            affection: { percentage: 150, bonus: '攻撃硬直', changeRate: null },
            note: [ '女性' ],
            atkInterval: [
                { startup: null, remain: null, cooldown: null },
                { startup: null, remain: null, cooldown: null }
            ],
            atkInterval_uncurr: [
                { startup: null, remain: null, cooldown: null },
                { startup: 21, remain: 18, cooldown: 56 },
                { startup: 21, remain: 18, cooldown: 56 }
            ]
        },
        skill: {
            awaken: {
                selectable: true, selected: '覚醒',
                options: [ '通常', '覚醒' ]
            },
            target: [ '3体', '1体' ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncurr: [ { A: 40, B: null }, { A: 60, B: null } ],
            dur: { A: null, B: null },
            dur_uncurr: [ { A: 40, B: null }, { A: 60, B: null } ],
            firstTime: null, interval: null,
            trigger: [ 'スキル中hit', 'スキル中hit' ], trans: [ '-', '-' ], HPred: [ 1, 1 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ '-', '-' ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        unitInfo: {
            unitName: '迎春の呪姫オロチヒメ', deployType: '遠距離型', rarity: '黒',
            unitClass: {
                selectable: false, selected: '呪術使い系',
                options: [ '呪術使い系' ]
            },
            attribution: [ '人間', '魔術師', '東の国', 'お正月' ],
            affection: { percentage: 150, bonus: '再動短縮', changeRate: null },
            note: [ '女性', '状態異常無効' ],
            atkInterval: [
                { startup: null, remain: null, cooldown: null },
                { startup: null, remain: null, cooldown: null }
            ],
            atkInterval_uncurr: [
                { startup: 41, remain: 30, cooldown: 101 },
                { startup: 41, remain: 30, cooldown: 31 },
                { startup: 41, remain: 30, cooldown: 31 }
            ]
        },
        skill: {
            awaken: {
                selectable: false, selected: '覚醒',
                options: [ '通常', '覚醒' ]
            },
            target: [ '全敵', '6-7体' ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncurr: [ { A: 50, B: null }, { A: 55, B: null } ],
            dur: { A: null, B: null },
            dur_uncurr: [ { A: 30, B: null }, { A: 40, B: null } ],
            firstTime: null, interval: null,
            trigger: [ '-', 'スキル中hit' ], trans: [ '-', '-' ], HPred: [ 15, 2 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ '-', '-' ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        unitInfo: {
            unitName: '道化師ワンダーハート', deployType: '遠距離型', rarity: '白',
            unitClass: {
                selectable: false, selected: '道化師系',
                options: [ '道化師系' ]
            },
            attribution: [ '人間' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null },
            note: [ '女性' ],
            atkInterval: [
                { startup: null, remain: null, cooldown: null },
                { startup: null, remain: null, cooldown: null }
            ],
            atkInterval_uncurr: [
                { startup: 9, remain: 12, cooldown: 31 },
                { startup: 9, remain: 12, cooldown: 31 },
                { startup: 13, remain: 37, cooldown: 2 }
            ]
        },
        skill: {
            awaken: {
                selectable: false, selected: '覚醒',
                options: [ '通常', '覚醒' ]
            },
            target: [ '3体', '射程内' ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncurr: [ { A: 30, B: null }, { A: 40, B: null } ],
            dur: { A: null, B: null },
            dur_uncurr: [ { A: 15, B: null }, { A: 20, B: null } ],
            firstTime: null, interval: null,
            trigger: [ null, 'スキル中hit' ], trans: [ '-', '-' ], HPred: [ 0, 1 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ '-', '-' ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    }
];
//テンプレ
const unitDataTemplate_onSkillAct = {
    id: null,
    unitInfo: {
        unitName: '', deployType: '', rarity: '',
        unitClass: {
            selectable: false, selected: '',
            options: [ '' ]
        },
        attribution: [ '', '', '', '' ],
        affection: { percentage: null, bonus: '', changeRate: null },
        note: [ '' ]
    },
    skill: {
        awaken: {
            selectable: false, selected: '通常',
            options: [ '通常', '覚醒' ]
        },
        target: [ null, null ],
        WT: { A: null, B: null },
        CT: { A: null, B: null },
        CT_uncurr: [ { A: null, B: null }, { A: null, B: null } ],
        dur: { A: null, B: null },
        dur_uncurr: [ { A: null, B: null }, { A: null, B: null } ],
        firstTime: null, interval: null,
        trigger: [ null, null ], trans: [ '-', '-' ], HPred: [ 0, 0 ],
        mulByNum: [ [ 1 ], [ 1 ] ],
        dmgMul: { opt: [ false, false ], mul: [ 1, 1 ], target: [ null, null ] }
    }
};
const unitDataTemplate_onHit = {
    id: null,
    unitInfo: {
        unitName: '', deployType: '', rarity: '',
        unitClass: {
            selectable: false, selected: '',
            options: [ '' ]
        },
        attribution: [ '', '', '', '' ],
        affection: { percentage: null, bonus: '', changeRate: null },
        note: [ '' ],
        atkInterval: [
            { startup: null, remain: null, cooldown: null },
            { startup: null, remain: null, cooldown: null }
        ],
        atkInterval_uncurr: [
            { startup: null, remain: null, cooldown: null },
            { startup: null, remain: null, cooldown: null },
            { startup: null, remain: null, cooldown: null }
        ]
    },
    skill: {
        awaken: {
            selectable: false, selected: '通常',
            options: [ '通常', '覚醒' ]
        },
        target: [ null, null ],
        WT: { A: null, B: null },
        CT: { A: null, B: null },
        CT_uncurr: [ { A: null, B: null }, { A: null, B: null } ],
        dur: { A: null, B: null },
        dur_uncurr: [ { A: null, B: null }, { A: null, B: null } ],
        firstTime: null, interval: null,
        trigger: [ null, null ], trans: [ '-', '-' ], HPred: [ 0, 0 ],
        mulByNum: [ [ 1 ], [ 1 ] ],
        dmgMul: { opt: [ false, false ], mul: [ 1, 1 ], target: [ null, null ] }
    }
};

//属性一覧
const array_attr1 = [
    '', 'アンデッド', 'エルフ', 'オーク', 'ゴブリン', 'ダークエルフ', 'デーモン', 'ドワーフ',
    'ハーフエルフ', 'ハーフデーモン', '魚人', '人間', '仙人', '天界人', '天使', '妖怪', '機械',
    '獣人', '神', '竜人', '聖霊', '鳥人', 'ねんどろいど'
];
const array_attr2 = [
    '', 'ヴァンパイア', 'お正月', 'ちび', 'クリスマス', 'サマー', 'ジューンブライド',
    'ハロウィン','バレンタイン', '学園', '弓兵', '東の国', '機械', '温泉', '白の帝国',
    '砂漠の国', '英傑', '魔術師', 'パルス王国', '七つの大罪'
];
//その他一覧
const array_note = [
    '', '女性', '男性', 'プリンセス系', 'ドラゴンライダー系', '状態異常無効', 'GG持ち', 'HP回復不可', '魔界適応', '深海適応', '天界適応'
];

const vm = new Vue({
    el: '#app',
    data() {
        return {
            //バフリスト
            rWTlist: _.cloneDeep(rWTlistElem),
            checked_rWT: [],
            rCTdepType: _.cloneDeep(rCTdepTypeElem),
            rCTlist: _.cloneDeep(rCTlistElem),
            checked_rCT: [],
            skillExtendList: _.cloneDeep(skillExtendListElem),
            checked_skillExtend: [],
            hasteTeemList: _.cloneDeep(hasteTeemListElem),
            checked_hasteTeem: [],
            hasteSkillList: _.cloneDeep(hasteSkillListElem),
            checked_hasteSkill: [],
            giveDmgMulList: _.cloneDeep(giveDmgMulListElem),
            checked_giveDmgMul: [],
            redMapEffList: _.cloneDeep(redMapEffListElem),
            checked_redMapEff: [],
            //自己バフリスト
            self_rWTlist: _.cloneDeep(self_rWTlistElem),
            self_rCTlist: _.cloneDeep(self_rCTlistElem),
            self_skillExtendList: _.cloneDeep(self_skillExtendListElem),
            self_hasteTeemList: _.cloneDeep(self_hasteTeemListElem),
            self_redMapEffList: _.cloneDeep(self_redMapEffListElem),
            //他リスト
            depTypeCount: _.cloneDeep(depTypeCountElem),
            specialWTlist: _.cloneDeep(specialWTlistElem),
            specialAffList: _.cloneDeep(specialAffListElem),
            //スキル発動時発生型
            unitsList_onSkillAct: _.cloneDeep(unitsList_onSkillActElem),
            modal_onSkillAct: false,
            newUnitData_onSkillAct: _.cloneDeep(unitDataTemplate_onSkillAct),
            nUnits0_onSkillAct: 0,      //非イビルプリンセス系のユニット数
            nUnits1_onSkillAct: 0,      //イビルプリンセス系のユニット数
            nUnitsAdded_onSkillAct: 0,  //追加されたユニット数
            //攻撃ヒット時発生型
            unitsList_onHit: _.cloneDeep(unitsList_onHitElem),
            modal_onHit: false,
            newUnitData_onHit: _.cloneDeep(unitDataTemplate_onHit),
            nUnits_onHit: 0,        //ユニット数
            nUnitsAdded_onHit: 0,   //追加されたユニット数
            //モーダル系
            modal_skillAwaken: [ true, true ],
            modal_atkInterval: [ false, true, true ],
            addUnitAlart: '',
            //オプション(モーダル)
            options_attr1: _.cloneDeep(array_attr1),
            options_attr2: _.cloneDeep(array_attr2),
            options_note: _.cloneDeep(array_note),
            //数値
            redeployInterval: {
                use: false,
                value: 30,
                min: 1,
                max: 1000
            },
            timeCap: {
                value: 300,
                min: 10,
                max: 1000
            },
            maxHP: {
                value: 100000,
                min: 1,
                max: 10000000
            },
            linkedHP: {
                use: false,
                value: 10000,
                min: 1,
                max: 10000000
            },
            simultHit: {
                use: false,
                value: 2,
                min: 1,
                max: 1001
            },
            DPS: 0,
            incAtkCooldown_enemy: {
                value: 0,
                min: 0,
                max: 1000
            },
            incAtkCooldown_map: {
                map: {
                    selected: '深海',
                    options: [ '深海' ]
                },
                value: 0,
                min: 0,
                max: 1000
            },
            //グラフ
            plotNum: 0,
            datasets: [],
            graphHidden_onSkillAct: false,
            graphHidden_onHit: false,
            sortGraphTooltip: false
        }
    },
    created() {
        const SetID = function(array) {
            _.forEach(array, function(elem, index) {
                elem.id = index;
            });
        };
        const me = this;
        SetID(me.rWTlist);
        SetID(me.rCTdepType);
        SetID(me.rCTlist);
        SetID(me.skillExtendList);
        SetID(me.hasteTeemList);
        SetID(me.hasteSkillList);
        SetID(me.giveDmgMulList);
        SetID(me.redMapEffList);

        SetID(me.self_rWTlist);
        SetID(me.self_rCTlist);
        SetID(me.self_skillExtendList);
        SetID(me.self_hasteTeemList);
        SetID(me.self_redMapEffList);

        SetID(me.unitsList_onSkillAct);
        SetID(me.unitsList_onHit);

        _.forEach(me.unitsList_onSkillAct, function(unit) {
            const unitClass = unit.unitInfo.unitClass.selected;
            if(unitClass === 'イビルクイーン'
            || unitClass === 'イビルシーカー'
            || unitClass === 'デスブリンガー') {
                me.nUnits1_onSkillAct++;
            } else {
                me.nUnits0_onSkillAct++;
            }
        });
        _.forEach(me.unitsList_onHit, function(unit) {
            me.nUnits_onHit++;
        });
    },
    mounted() {
        this.Chart();
    },
    updated() {
        this.canvas.destroy();
        this.Chart();
    },
    computed: {
        //好感度ボーナス込みの初動・再動
        CurrectSkill() {
            return function(unit) {
                const me = this;
                const unitName = unit.unitInfo.unitName;
                const rarity = unit.unitInfo.rarity;
                const AW = unit.skill.awaken.selected;
                const aff = unit.unitInfo.affection;    //object
                const WT = unit.skill.WT;               //object
                const CT = unit.skill.CT;               //object
                const dur = unit.skill.dur;             //object
                const CT_uncurr = unit.skill.CT_uncurr[AW === '通常' ? 0 : 1];      //object
                const dur_uncurr = unit.skill.dur_uncurr[AW === '通常' ? 0 : 1];    //object
                let curr = NaN;
                //150%ボーナスの補正値
                if(aff.bonus !== null && aff.bonus !== 'その他') {
                    curr = _.toNumber(_.findKey(me.specialAffList[aff.bonus][rarity], key => _.includes(key, unitName)));
                }
                if(_.isNaN(curr)) {
                    switch(rarity) {
                        case '黒':
                            curr = 0.25; 
                            break;
                        case '白':
                        case '青':
                            curr = 0.2;
                            break;
                        case '金':
                            curr = 0.18;
                            break;
                        default:
                    }
                }
                //CT・スキル時間の計算
                switch(aff.bonus) {
                    case '再動短縮':
                        aff.changeRate = -Math.floor(curr * (aff.percentage - 100) * 20) / 10;
                        CT.A = CT_uncurr.A * (1 + aff.changeRate / 100);
                        if(CT_uncurr.B !== null) CT.B = CT_uncurr.B * (1 + aff.changeRate / 100);
                        dur.A = dur_uncurr.A;
                        dur.B = dur_uncurr.B;
                        break;
                    case '時間延長':
                        aff.changeRate = Math.floor(curr * (aff.percentage - 100) * 20) / 10;
                        CT.A = CT_uncurr.A;
                        CT.B = CT_uncurr.B;
                        dur.A = dur_uncurr.A * (1 + aff.changeRate / 100);
                        if(dur_uncurr.B !== null) dur.B = dur_uncurr.B * (1 + aff.changeRate / 100);
                        break;
                    default:
                        CT.A = CT_uncurr.A;
                        CT.B = CT_uncurr.B;
                        dur.A = dur_uncurr.A;
                        dur.B = dur_uncurr.B;
                }
                //初動の計算
                const specialWT = _.find(me.specialWTlist, {unitName: unitName, rarity: rarity, skillAwaken: AW});
                if(specialWT !== undefined) {
                    WT.A = specialWT.WT;
                } else {
                    switch(rarity) {
                        case '黒':
                            WT.A = AW === '通常' ? 1 : 5;
                            if(CT.B !== null) WT.B = AW === '通常' ? 1 : 5;
                            break;
                        case '白':
                            WT.A = CT.A * 0.5;
                            if(CT.B !== null) WT.B = CT.B * 0.5;
                            break;
                        case '青':
                            WT.A = CT.A * 0.6;
                            if(CT.B !== null) WT.B = CT.B * 0.6;
                            break;
                        case '金':
                            WT.A = CT.A * 0.66;
                            if(CT.B !== null) WT.B = CT.B * 0.66;
                            break;
                        default:
                            WT.A = CT.A;
                            if(CT.B !== null) WT.B = CT.B;
                    }
                }
            }
        },
        //初動短縮
        SetWTred() {
            return function(unit) {
                const me = this;
                const unitName = unit.unitInfo.unitName;
                const unitClass = unit.unitInfo.unitClass.selected;
                let buffRate = 0;
                let bufferInfo;
                //クラス・属性の初動短縮
                //自身による効果
                bufferInfo = _.findLast(me.rWTlist, {buffer: unitName});
                if(bufferInfo !== undefined) {
                    buffRate = Math.max(buffRate, bufferInfo.rate);
                }
                bufferInfo = _.findLast(me.rWTlist, {buffer: unitClass});
                if(bufferInfo !== undefined) {
                    buffRate = Math.max(buffRate, bufferInfo.rate);
                }
                bufferInfo = _.find(me.self_rWTlist, {buffer: unitName});
                if(bufferInfo !== undefined) {
                    buffRate = Math.max(buffRate, bufferInfo.rate);
                }
                bufferInfo = _.find(me.self_rWTlist, {buffer: unitClass});
                if(bufferInfo !== undefined) {
                    buffRate = Math.max(buffRate, bufferInfo.rate);
                }
                //選択したオプションによる効果
                _.forEach(me.checked_rWT, function(buffer) {
                    bufferInfo = _.find(me.rWTlist, {buffer: buffer.buffer, awaken: buffer.awaken});
                    buffRate = Math.max(buffRate, bufferInfo.rate * me.IsTarget(unit, bufferInfo));
                });
                return buffRate / 100;
            }
        },
        //再動短縮
        SetCTred() {
            return function(unit) {
                const me = this;
                const unitName = unit.unitInfo.unitName;
                const unitClass = unit.unitInfo.unitClass.selected;
                let buffRate;
                let bufferInfo;
                //近接型・遠距離型・遠近両型の再動短縮
                bufferInfo = _.find(me.rCTdepType, {deployType: unit.unitInfo.deployType});
                buffRate = bufferInfo.rate;
                //クラス・属性の再動短縮
                //自身による効果
                bufferInfo = _.findLast(me.rCTlist, {buffer: unitName});
                if(bufferInfo !== undefined) {
                    buffRate = Math.max(buffRate, bufferInfo.rate);
                }
                bufferInfo = _.findLast(me.rCTlist, {buffer: unitClass});
                if(bufferInfo !== undefined) {
                    buffRate = Math.max(buffRate, bufferInfo.rate);
                }
                bufferInfo = _.find(me.self_rCTlist, {buffer: unitName});
                if(bufferInfo !== undefined) {
                    buffRate = Math.max(buffRate, bufferInfo.rate);
                }
                bufferInfo = _.find(me.self_rCTlist, {buffer: unitClass});
                if(bufferInfo !== undefined) {
                    buffRate = Math.max(buffRate, bufferInfo.rate);
                }
                //選択したオプションによる効果
                _.forEach(me.checked_rCT, function(buffer) {
                    bufferInfo = _.find(me.rCTlist, {buffer: buffer.buffer, awaken: buffer.awaken});
                    buffRate = Math.max(buffRate, bufferInfo.rate * me.IsTarget(unit, bufferInfo));
                });
                return buffRate / 100;
            }
        },
        //スキル時間延長
        SetExtend() {
            return function(unit) {
                const me = this;
                const unitName = unit.unitInfo.unitName;
                const unitClass = unit.unitInfo.unitClass.selected;
                let buffRate = 0;
                let bufferInfo;
                //クラス・属性のスキル属性延長
                //自身による効果
                bufferInfo = _.findLast(me.skillExtendList, {buffer: unitName});
                if(bufferInfo !== undefined) {
                    buffRate = Math.max(buffRate, bufferInfo.rate);
                }
                bufferInfo = _.findLast(me.skillExtendList, {buffer: unitClass});
                if(bufferInfo !== undefined) {
                    buffRate = Math.max(buffRate, bufferInfo.rate);
                }
                bufferInfo = _.find(me.self_skillExtendList, {buffer: unitName});
                if(bufferInfo !== undefined) {
                    buffRate = Math.max(buffRate, bufferInfo.rate);
                }
                bufferInfo = _.find(me.self_skillExtendList, {buffer: unitClass});
                if(bufferInfo !== undefined) {
                    buffRate = Math.max(buffRate, bufferInfo.rate);
                }
                //選択したオプションによる効果
                _.forEach(me.checked_skillExtend, function(buffer) {
                    bufferInfo = _.find(me.skillExtendList, {buffer: buffer.buffer, awaken: buffer.awaken});
                    buffRate = Math.max(buffRate, bufferInfo.rate * me.IsTarget(unit, bufferInfo));
                });
                return buffRate / 100;
            }
        },
        //硬直短縮編成バフ
        SetHasteRate() {
            return function(unit) {
                const me = this;
                const unitName = unit.unitInfo.unitName;
                const unitClass = unit.unitInfo.unitClass.selected;
                let buffRate = 0;
                let bufferInfo;
                //クラス・属性の硬直短縮(編成バフ)
                //自身による効果
                bufferInfo = _.findLast(me.hasteTeemList, {buffer: unitName});
                if(bufferInfo !== undefined) {
                    buffRate = Math.max(buffRate, bufferInfo.rate);
                }
                bufferInfo = _.findLast(me.hasteTeemList, {buffer: unitClass});
                if(bufferInfo !== undefined) {
                    buffRate = Math.max(buffRate, bufferInfo.rate);
                }
                bufferInfo = _.find(me.self_hasteTeemList, {buffer: unitName});
                if(bufferInfo !== undefined) {
                    buffRate = Math.max(buffRate, bufferInfo.rate);
                }
                bufferInfo = _.find(me.self_hasteTeemList, {buffer: unitClass});
                if(bufferInfo !== undefined) {
                    buffRate = Math.max(buffRate, bufferInfo.rate);
                }
                //選択したオプションによる効果
                _.forEach(me.checked_hasteTeem, function(buffer) {
                    bufferInfo = _.find(me.hasteTeemList, {buffer: buffer.buffer, awaken: buffer.awaken});
                    buffRate = Math.max(buffRate, bufferInfo.rate * me.IsTarget(unit, bufferInfo));
                });
                return buffRate / 100;
            }
        },
        //ユニットがバフ等の対象か判定
        IsTarget() {
            return function(unit, info) {
                const me = this;
                const deployType = [unit.unitInfo.deployType];  //array
                const rarity = unit.unitInfo.rarity;
                const unitClass = unit.unitInfo.unitClass.selected;
                const attr = unit.unitInfo.attribution;         //array
                const note = unit.unitInfo.note;                //array
                deployType.push(_.findKey(me.depTypeCount, key => _.includes(key, unitClass)));
                let isTarget;
                if(info.AndOr === 'and') {
                    isTarget = 1;
                    _.forEach(info.target,function(tar) {
                        switch(Object.keys(tar)[0]) {
                            case 'deployType':
                                isTarget &= !_.isEmpty(_.intersection(tar.deployType, deployType));
                                break;
                             case 'rarity':
                                isTarget &= _.includes(tar.rarity, rarity);
                                break;
                            case 'unitClass':
                                isTarget &= _.includes(tar.unitClass, unitClass);
                                break;
                            case 'attribution':
                                isTarget &= !_.isEmpty(_.intersection(tar.attribution, attr));
                                break;
                            case 'note':
                                isTarget &= !_.isEmpty(_.intersection(tar.note, note));
                                break;
                            default:
                        }
                    });
                } else {
                    isTarget = 0;
                    _.forEach(info.target, function(tar) {
                        switch(Object.keys(tar)[0]) {
                            case 'deployType':
                                isTarget |= !_.isEmpty(_.intersection(tar.deployType, deployType));
                                break;
                             case 'rarity':
                                isTarget |= _.includes(tar.rarity, rarity);
                                break;
                            case 'unitClass':
                                isTarget |= _.includes(tar.unitClass, unitClass);
                                break;
                            case 'attribution':
                                isTarget |= !_.isEmpty(_.intersection(tar.attribution, attr));
                                break;
                            case 'note':
                                isTarget |= !_.isEmpty(_.intersection(tar.note, note));
                                break;
                            default:
                                isTarget |= 1;
                        }
                    })
                }
                return isTarget;
            }
        },
        //初回HP減少発生までの時間(スキル発動時発生型)
        SetFirstTime_onSkillAct() {
            return function(unit) {
                const me = this;
                me.CurrectSkill(unit);
                const WTred = me.SetWTred(unit);
                const CTred = me.SetCTred(unit);
                const extend = me.SetExtend(unit);
                const unitName = unit.unitInfo.unitName;
                const index = unit.skill.awaken.selected === '通常' ? 0 : 1;
                const WT = unit.skill.WT;   //object
                const CT = unit.skill.CT;   //object
                const dur = unit.skill.dur; //object
                const isBomb = {
                    A: (dur.A < 5) || ((unitName === '爆砲の新兵カノン' || unitName === '聖夜の祝星砲カノン') && index === 1 && dur.B === 5),
                    B: dur.B < 5
                };
                let firstTime = WT.A * (1 - WTred);
                if(unit.skill.trigger[index] === 'B') {
                    if(me.redeployInterval.use) {
                        firstTime +=
                            Math.min(
                                dur.A * (1 + extend * !isBomb.A) + CT.A * (1 - CTred),
                                me.redeployInterval.value + WT.B * (1 - WTred)
                            );
                    } else {
                        firstTime += dur.A * (1 + extend * !isBomb.A) + CT.A * (1 - CTred);
                    }
                }
                return unit.skill.firstTime = firstTime;
            }
        },
        //初回HP減少発生までの時間(攻撃ヒット時発生型)
        SetFirstTime_onHit() {
            return function(unit) {
                const me = this;
                me.CurrectSkill(unit);
                const WTred = me.SetWTred(unit);
                const CTred = me.SetCTred(unit);
                const extend = me.SetExtend(unit);
                const unitName = unit.unitInfo.unitName;
                const index = unit.skill.awaken.selected === '通常' ? 0 : 1;
                const WT = unit.skill.WT;   //object
                const CT = unit.skill.CT;   //object
                const dur = unit.skill.dur; //object
                const isBomb = {
                    A: (dur.A < 5) || ((unitName === '爆砲の新兵カノン' || unitName === '聖夜の祝星砲カノン') && index === 1 && dur.B === 5),
                    B: dur.B < 5
                };
                let firstTime = WT.A * (1 - WTred);
                if(unit.skill.trigger[index] === 'B') {     //編集いるかも
                    if(me.redeployInterval.use) {
                        firstTime +=
                            Math.min(
                                dur.A * (1 + extend * !isBomb.A) + CT.A * (1 - CTred),
                                me.redeployInterval.value + WT.B * (1 - WTred)
                            );
                    } else {
                        firstTime += dur.A * (1 + extend * !isBomb.A) + CT.A * (1 - CTred);
                    }
                }
                return unit.skill.firstTime = firstTime;
            }
        },
        //HP減少発生の間隔(スキル発動時発生型)
        SetInterval_onSkillAct() {
            return function(unit) {
                const me = this;
                //me.CurrectSkill(unit);
                const WTred = me.SetWTred(unit);
                const CTred = me.SetCTred(unit);
                const extend = me.SetExtend(unit);
                const unitName = unit.unitInfo.unitName;
                const index = unit.skill.awaken.selected === '通常' ? 0 : 1;
                const WT = unit.skill.WT;   //object
                const CT = unit.skill.CT;   //object
                const dur = unit.skill.dur; //object
                const isBomb = {
                    A: (dur.A < 5) || ((unitName === '爆砲の新兵カノン' || unitName === '聖夜の祝星砲カノン') && index === 1 && dur.B === 5),
                    B: dur.B < 5
                };
                let interval = 0;
                let intervalRedeploy = 0;
                switch(unit.skill.trans[index]) {
                    case '-':
                        interval = dur.A * (1 + extend * !isBomb.A) + CT.A * (1 - CTred);
                        intervalRedeploy = me.redeployInterval.value + WT.A * (1 - WTred);
                        break;
                    case '交互':
                        interval = (dur.A * (1 + extend * !isBomb.A) + dur.B * (1 + extend * !isBomb.B)) + (CT.A + CT.B) * (1 - CTred);
                        intervalRedeploy = me.redeployInterval.value
                            + Math.min(
                                WT.A * (1 - WTred) + dur.A * (1 + extend * !isBomb.A) + CT.A * (1 - CTred),
                                WT.B * (1 - WTred) + dur.B * (1 + extend * !isBomb.B) + CT.B * (1 - CTred),
                                me.redeployInterval.value + WT.A * (1 - WTred) + WT.B * (1 - WTred)
                            );
                        break;
                    case '初回A':
                        interval = dur.B * (1 + extend * !isBomb.B) + CT.B * (1 - CTred);
                        intervalRedeploy = me.redeployInterval.value + WT.B * (1 - WTred);
                        break;
                    default:
                }
                if(me.redeployInterval.use) {
                    return unit.skill.interval = Math.min(interval, intervalRedeploy);
                } else {
                    return unit.skill.interval = interval;
                }
            }
        },
        //HP減少攻撃をしない間隔(攻撃ヒット時発生型)
        SetInterval_onHit() {
            return function(unit) {
                const me = this
                //me.CurrectSkill(unit);
                const WTred = me.SetWTred(unit);
                const CTred = me.SetCTred(unit);
                const extend = me.SetExtend(unit);
                const unitName = unit.unitInfo.unitName;
                const index = unit.skill.awaken.selected === '通常' ? 0 : 1
                const WT = unit.skill.WT;   //object
                const CT = unit.skill.CT;   //object
                const dur = unit.skill.dur; //object
                const isBomb = {
                    A: (dur.A < 5) || ((unitName === '爆砲の新兵カノン' || unitName === '聖夜の祝星砲カノン') && index === 1 && dur.B === 5),
                    B: dur.B < 5
                };
                let interval = 0;
                let intervalRedeploy = 0;
                switch(unit.skill.trans[index]) {
                    case '-':
                        interval = CT.A * (1 - CTred);
                        intervalRedeploy = me.redeployInterval.value + WT.A * (1 - WTred);
                        break;
                    case '交互':
                        switch(unit.skill.trigger[index]) {
                            case 'A':
                                interval =  dur.B * (1 + extend * !isBomb.B) + (CT.A + CT.B) * (1 - CTred);
                                intervalRedeploy = me.redeployInterval.value
                                    + Math.min(
                                        WT.A * (1 - WTred) + CT.A * (1 - CTred),
                                        WT.B * (1 - WTred) + dur.B * (1 + extend * !isBomb.B) + CT.B * (1 - CTred),
                                    );
                                break;
                            case 'B':
                                interval = dur.A * (1 + extend * !isBomb.A) + (CT.A + CT.B) * (1 - CTred);
                                intervalRedeploy = me.redeployInterval.value
                                    + Math.min(
                                        WT.A * (1 - WTred) + dur.A * (1 + extend * !isBomb.A) + CT.A * (1 - CTred),
                                        WT.B * (1 - WTred) + CT.B * (1 - CTred),
                                    );
                                break;
                            default:
                        }
                        break;
                    case '初回A':
                        interval = CT.B * (1 - CTred);
                        intervalRedeploy = me.redeployInterval.value + WT.B * (1 - WTred);
                        break;
                    default:
                }
                if(me.redeployInterval.use) {
                    return unit.skill.interval = Math.min(interval, intervalRedeploy);
                } else {
                    return unit.skill.interval = interval;
                }
            }
        },
        //攻撃間隔
        SetAtkInterval() {
            return function(unit, index) {
                const me = this;
                const atkInterval = me.SetAtkIntervalSub(unit, index);  //object
                if(atkInterval.startup !== null) {
                    const atkMotion = Math.floor((atkInterval.startup + atkInterval.remain - 1) / 2);
                    const atkCooldown = Math.floor((atkInterval.cooldown - 1) / 2);
                    return `${atkMotion + 1 + atkCooldown + 1}f`;
                } else {
                    return '-';
                }
            }
        },
        SetAtkIntervalSub() {
            return function(unit, index0) {
                const me = this;
                const index1 = index0 === 0 ? 0 : unit.skill.awaken.selected === '通常' ? 1 : 2;
                const hasteRate = me.SetHasteRate(unit);
                const unitName = unit.unitInfo.unitName;
                const rarity = unit.unitInfo.rarity;
                const unitClass = unit.unitInfo.unitClass.selected;
                const aff = unit.unitInfo.affection;    //object
                const atkStartup = unit.unitInfo.atkInterval_uncurr[index1].startup;
                const atkRemain = unit.unitInfo.atkInterval_uncurr[index1].remain;
                let atkCooldown = unit.unitInfo.atkInterval_uncurr[index1].cooldown;
                let curr = NaN;
                let atkCooldownBySkill = 0;
                let redMapEffRate = 0;
                let bufferInfo;
                //150%ボーナスの補正値
                if(aff.bonus !== null && aff.bonus !== 'その他') {
                    curr = _.toNumber(_.findKey(me.specialAffList[aff.bonus][rarity], key => _.includes(key, unitName)));
                }
                if(_.isNaN(curr)) {
                    switch(rarity) {
                        case '黒':
                            curr = 0.18; 
                            break;
                        case '白':
                        case '青':
                            curr = 0.14;
                            break;
                        case '金':
                            curr = 0.13;
                            break;
                        default:
                    }
                }
                //攻撃速度の計算
                //好感度ボーナス
                switch(aff.bonus) {
                    case '攻撃硬直':
                        aff.changeRate = -Math.floor(curr * (aff.percentage - 100) * 20) / 10;
                        if(atkCooldown !== null) atkCooldown = Math.ceil((atkCooldown - 1) * (1 + aff.changeRate / 100) + 1);
                        break;
                    default:
                }
                //硬直短縮(スキル)
                //自身による効果
                if(index1 !== 0) {
                    bufferInfo = _.findLast(me.hasteSkillList, {buffer: unitName});
                    if(bufferInfo !== undefined) {
                        atkCooldownBySkill = Math.max(atkCooldownBySkill, bufferInfo.atkCooldown);
                    }
                    bufferInfo = _.findLast(me.hasteSkillList, {buffer: unitClass});
                    if(bufferInfo !== undefined) {
                        atkCooldownBySkill = Math.max(atkCooldownBySkill, bufferInfo.atkCooldown);
                    }
                }
                //選択したオプションによる効果
                _.forEach(me.checked_hasteSkill, function(buffer) {
                    bufferInfo = _.find(me.hasteSkillList, {buffer: buffer.buffer, awaken: buffer.awaken});
                    atkCooldownBySkill = Math.max(atkCooldownBySkill, bufferInfo.atkCooldown * me.IsTarget(unit, bufferInfo));
                })
                //鈍化(マップ)軽減
                //自身による効果
                bufferInfo = _.findLast(me.redMapEffList, {buffer: unitName});
                if(bufferInfo !== undefined) {
                    if(bufferInfo.map === me.incAtkCooldown_map.map.selected) {
                        redMapEffRate = Math.max(redMapEffRate, bufferInfo.rate);
                    }
                }
                bufferInfo = _.findLast(me.redMapEffList, {buffer: unitClass});
                if(bufferInfo !== undefined) {
                    if(bufferInfo.map === me.incAtkCooldown_map.map.selected) {
                        redMapEffRate = Math.max(redMapEffRate, bufferInfo.rate);
                    }
                }
                bufferInfo = _.find(me.self_redMapEffList, {buffer: unitName});
                if(bufferInfo !== undefined) {
                    if(bufferInfo.map === me.incAtkCooldown_map.map.selected) {
                        redMapEffRate = Math.max(redMapEffRate, bufferInfo.rate);
                    }
                }
                bufferInfo = _.find(me.self_redMapEffList, {buffer: unitClass});
                if(bufferInfo !== undefined) {
                    if(bufferInfo.map === me.incAtkCooldown_map.map.selected) {
                        redMapEffRate = Math.max(redMapEffRate, bufferInfo.rate);
                    }
                }
                //選択したオプションによる効果
                _.forEach(me.checked_redMapEff, function(buffer) {
                    bufferInfo = _.find(me.redMapEffList, {buffer: buffer.buffer, awaken: buffer.awaken});
                    if(bufferInfo.map === me.incAtkCooldown_map.map.selected) {
                        redMapEffRate = Math.max(redMapEffRate, bufferInfo.rate * me.IsTarget(unit, bufferInfo));
                    }
                })
                if(atkStartup !== null) {
                    //                 ↓ceil?
                    atkCooldown = Math.floor(((atkCooldownBySkill > 0 ? atkCooldownBySkill : atkCooldown) - 1) * (1 - hasteRate) + 1);
                    if(!_.includes(unit.unitInfo.note, '状態異常無効')) {
                        atkCooldown += me.incAtkCooldown_enemy.value * 2;
                    }
                    if(!_.includes(unit.unitInfo.note, '深海適応')) {
                        atkCooldown += Math.ceil(me.incAtkCooldown_map.value * (1 - redMapEffRate / 100)) * 2;
                    }
                    unit.unitInfo.atkInterval[index0].startup = atkStartup;
                    unit.unitInfo.atkInterval[index0].remain = atkRemain;
                    unit.unitInfo.atkInterval[index0].cooldown = atkCooldown;
                }
                return { startup: atkStartup, remain: atkRemain, cooldown: atkCooldown };
            }
        },
        //HP減少率
        SetHPred() {
            return function(unit) {
                const index = unit.skill.awaken.selected === '通常' ? 0 : 1;
                switch(unit.unitInfo.unitClass.selected) {
                    case 'イビルクイーン':
                        unit.skill.HPred[index] = 10;
                        break;
                    case 'イビルシーカー':
                        unit.skill.HPred[index] = 15;
                        break;
                    case 'デスブリンガー':
                        unit.skill.HPred[index] = 10;
                        break;
                    default:
                }
                if(unit.skill.dmgMul.opt[index] === 'あり') {
                    return unit.skill.HPred[index] * unit.skill.dmgMul.mul[index];
                } else {
                    return unit.skill.HPred[index];
                }
            }
        },
        //イビルプリンセス系クラスの倍率
        EvilPrincessMulti() {
            return function(unit, HP) {
                switch(unit.unitInfo.unitClass.selected) {
                    case 'ちびイビルプリンセス':
                    case 'ちびイビルクイーン':
                    case 'イビルプリンセス':
                    case 'イビルクイーン':
                    case 'イビルシーカー':
                        if(HP < 31) {
                            return 2.0;
                        } else if(HP < 51) {
                            return 1.7;
                        } else if(HP < 71) {
                            return 1.4;
                        } else if(HP < 91) {
                            return 1.2;
                        } else {
                            return 1.0;
                        }
                    case 'デスブリンガー':
                        if(HP < 31) {
                            return 2.3;
                        } else if(HP < 51) {
                            return 2.0;
                        } else if(HP < 71) {
                            return 1.7;
                        } else if(HP < 91) {
                            return 1.4;
                        } else {
                            return 1.0;
                        }
                    default:
                        return 1.0;
                }
            }
        },
        //グラフデータ作成
        SetGraphData() {
            const me = this;
            const max = me.unitsList_onSkillAct.length + me.unitsList_onHit.length;
            let h;
            me.datasets.length = 0;
            //スキル発動時発生型
            {
                //非イビルプリンセス系
                for(let i = 0; i < me.nUnits0_onSkillAct; i++) {
                    const id = i;
                    const unit = me.unitsList_onSkillAct[id];
                    h = 360 * i / me.nUnits0_onSkillAct;
                    //グラフデータ作成
                    me.datasets.push({
                        label: unit.unitInfo.unitName,
                        data: me.ClacHPchange_onSkillAct(unit),
                        borderColor: 'hsla(' + h + ', 100%, 50%, 0.7)',
                        backgroundColor: 'hsla(' + h + ', 100%, 50%, 0.7)',
                        borderDash: [15, 3],
                        pointRadius: 0,
                        pointHitRadius: _.clamp(_.floor(300 / me.plotNum, 2), 0.1, 1.0),
                        hidden: me.graphHidden_onSkillAct
                    });
                }
                //イビルプリンセス系
                for(let i = 0; i < me.nUnits1_onSkillAct; i++) {
                    const id = me.nUnits0_onSkillAct + i;
                    const unit = me.unitsList_onSkillAct[id];
                    h = 360 * i / me.nUnits1_onSkillAct;
                    //グラフデータ作成
                    me.datasets.push({
                        label: unit.unitInfo.unitName,
                        data: me.ClacHPchange_onSkillAct(unit),
                        borderColor: 'hsla(' + h + ', 100%, 50%, 0.7)',
                        backgroundColor: 'hsla(' + h + ', 100%, 50%, 0.7)',
                        borderDash: [10, 3, 3, 3],
                        pointRadius: 0,
                        pointHitRadius: _.clamp(_.floor(300 / me.plotNum, 2), 0.1, 1.0),
                        hidden: me.graphHidden_onSkillAct
                    });
                }
                //追加分
                for(let i = 0; i < me.nUnitsAdded_onSkillAct; i++) {
                    const id = me.nUnits0_onSkillAct + me.nUnits1_onSkillAct + i;
                    const unit = me.unitsList_onSkillAct[id];
                    h = 360 * (i + 0.3) / me.nUnitsAdded_onSkillAct;
                    //グラフデータ作成
                    me.datasets.push({
                        label: unit.unitInfo.unitName,
                        data: me.ClacHPchange_onSkillAct(unit),
                        borderColor: 'hsla(' + h + ', 100%, 50%, 0.7)',
                        backgroundColor: 'hsla(' + h + ', 100%, 50%, 0.7)',
                        borderDash: [8, 3, 3, 3, 3, 3],
                        pointRadius: 0,
                        pointHitRadius: _.clamp(_.floor(300 / me.plotNum, 2), 0.1, 1.0),
                        hidden: me.graphHidden_onSkillAct
                    });
                }
            }
            //攻撃ヒット時発生型
            {
                for(let i = 0; i < me.nUnits_onHit; i++) {
                    const id = i;
                    const unit = me.unitsList_onHit[id];
                    me.SetFirstTime_onHit(unit);
                    me.SetInterval_onHit(unit);
                    h = 360 * i / me.nUnits_onHit;
                    //グラフデータ作成
                    me.datasets.push({
                        label: unit.unitInfo.unitName,
                        data: me.ClacHPchange_onHit(unit),
                        borderColor: 'hsla(' + h + ', 100%, 50%, 0.7)',
                        backgroundColor: 'hsla(' + h + ', 100%, 50%, 0.7)',
                        pointRadius: 0,
                        pointHitRadius: _.clamp(_.floor(300 / me.plotNum, 2), 0.1, 1.0),
                        hidden: me.graphHidden_onHit
                    });
                }
                //追加分
                for(let i = 0; i < me.nUnitsAdded_onHit; i++) {
                    const id = me.nUnits_onHit + i;
                    const unit = me.unitsList_onHit[id];
                    me.SetFirstTime_onHit(unit);
                    me.SetInterval_onHit(unit);
                    h = 360 * (i + 0.3) / me.nUnitsAdded_onHit;
                    //グラフデータ作成
                    me.datasets.push({
                        label: unit.unitInfo.unitName,
                        data: me.ClacHPchange_onHit(unit),
                        borderColor: 'hsla(' + h + ', 100%, 50%, 0.7)',
                        backgroundColor: 'hsla(' + h + ', 100%, 50%, 0.7)',
                        borderDash: [15, 3],
                        pointRadius: 0,
                        pointHitRadius: _.clamp(_.floor(300 / me.plotNum, 2), 0.1, 1.0),
                        hidden: me.graphHidden_onHit
                    });
                }
            }
        },
        //HP遷移計算(スキル発動時発生型)
        ClacHPchange_onSkillAct() {
            return function(unit) {
                const me = this;
                //const unitName = unit.unitInfo.unitName;
                const AW = unit.skill.awaken.selected;
                const index = AW === '通常' ? 0 : 1;
                const target = unit.skill.target[index];
                const mulByNum = unit.skill.mulByNum[index];    //array
                const HPred = unit.skill.HPred[index];
                const deltaTime = me.timeCap.value / me.plotNum;
                let HP = me.maxHP.value;
                let linkedHP = me.linkedHP.value;
                let simultHit = me.simultHit.value;
                if(Number.isInteger(parseInt(target))) {
                    simultHit = Math.min(simultHit, parseInt(target));
                }
                const HPchanges = [];
                const mul = [];
                let specialDmgMul = 1.0;
                let bufferInfo;
                let count = 0;
                const damage = me.DPS * deltaTime;
                //特攻倍率
                _.forEach(me.checked_giveDmgMul, function(buffer) {
                    bufferInfo = _.find(me.giveDmgMulList, {buffer: buffer.buffer, awaken: buffer.awaken});
                    specialDmgMul = Math.max(specialDmgMul, bufferInfo.dmgMul * me.IsTarget(unit, bufferInfo));
                });
                if(unit.skill.dmgMul.opt[index] === 'あり') {
                    specialDmgMul = Math.max(specialDmgMul, unit.skill.dmgMul.mul[index]);
                }
                //グラフデータ作成
                for(let time = 0; time <= me.timeCap.value; time += deltaTime) {
                    if(HP === 0) {
                        HPchanges.push(0);
                        continue;
                    }
                    mul[0] = specialDmgMul;
                    mul[1] = specialDmgMul;
                    //HP減少発生時の処理
                    if(time >= (unit.skill.firstTime + count * unit.skill.interval)) {
                        mul[0] *= me.EvilPrincessMulti(unit, HP / me.maxHP.value * 100);
                        mul[0] *= mulByNum[Math.min(count, mulByNum.length - 1)];
                        if(me.linkedHP.use) {
                            mul[1] *= me.EvilPrincessMulti(unit, linkedHP / me.linkedHP.value * 100);
                            mul[1] *= mulByNum[Math.min(count, mulByNum.length - 1)];
                        }
                        if(target === '全員' || target === '全敵') {    //全員・全敵
                            HP -= Math.max(1, Math.floor(HP * HPred / 100 * mul[0]));
                            if(me.linkedHP.use && linkedHP > 0) {   //HPリンクあり
                                HP -= Math.max(1, Math.floor(linkedHP * HPred / 100 * mul[1]));
                                linkedHP -= Math.max(1, Math.floor(linkedHP * HPred / 100 * mul[1]));
                            }
                        } else if(target === '射程内' || Number.isInteger(parseInt(target))) {   //射程内
                            if(me.simultHit.use) {  //引き付け(敵)あり
                                Array(simultHit).fill().map(function() {
                                    HP -= Math.max(1, Math.floor(HP * HPred / 100 * mul[0]));
                                });
                            } else {                //引き付け(敵)なし
                                HP -= Math.max(1, Math.floor(HP * HPred / 100 * mul[0]));
                                if(me.linkedHP.use && linkedHP > 0 && simultHit !== 1) {   //HPリンクあり
                                    HP -= Math.max(1, Math.floor(linkedHP * HPred / 100 * mul[1]));
                                    linkedHP -= Math.max(1, Math.floor(linkedHP * HPred / 100 * mul[1]));
                                }
                            }
                        } else {    //他
                            HP -= Math.max(1, Math.floor(HP * HPred / 100 * mul[0]));
                        }
                        count++;
                    }
                    if(HP <= 0) {
                        HP = 0;
                        HPchanges.push(0);
                    } else {
                        HPchanges.push(HP / me.maxHP.value * 100);
                        HP = _.clamp(HP - damage, 0, me.maxHP.value);
                        if(me.linkedHP.use) {
                            HP = _.clamp(linkedHP - damage, 0 , damage);
                            linkedHP = _.clamp(linkedHP - damage, 0, me.linkedHP.value);
                        }
                    }
                }
                return _.clone(HPchanges);
            }
        },
        //HP遷移計算(攻撃ヒット時発生型)
        ClacHPchange_onHit() {
            return function(unit) {
                const me = this;
                const extend = me.SetExtend(unit);
                //const unitName = unit.unitInfo.unitName;
                const AW = unit.skill.awaken.selected;
                const index = AW === '通常' ? 0 : 1;
                const trigger = unit.skill.trigger[index];
                const target = unit.skill.target[index];
                const mulByNum = unit.skill.mulByNum[index];    //array
                const HPred = unit.skill.HPred[index];
                const deltaTime = me.timeCap.value / me.plotNum;
                let HP = me.maxHP.value;
                let linkedHP = me.linkedHP.value;
                let simultHit = me.simultHit.value;
                if(Number.isInteger(parseInt(target))) {
                    simultHit = Math.min(simultHit, parseInt(target));
                }
                const HPchanges = [];
                const mul = [];
                let specialDmgMul = 1.0;
                let bufferInfo;
                let dur;
                let count = 0;
                let isActive = false;
                let skillTimeLapse = 0;
                let hit = 0;
                //const atkStartup = unit.unitInfo.atkInterval[0].startup;
                //const atkRemain = unit.unitInfo.atkInterval[0].remain;
                //const atkMotion = Math.floor((atkStartup + atkRemain - 1) / 2);
                //const atkCooldown = Math.floor((unit.unitInfo.atkInterval[0].cooldown - 1) / 2);
                //const atkInterval = atkMotion + 1 + atkCooldown + 1;
                const atkStartupSkill = unit.unitInfo.atkInterval[1].startup;
                const atkRemainSkill = unit.unitInfo.atkInterval[1].remain;
                const atkMotionSkill = Math.floor((atkStartupSkill + atkRemainSkill - 1) / 2);
                const atkCooldownSkill = Math.floor((unit.unitInfo.atkInterval[1].cooldown - 1) / 2);
                const atkIntervalSkill = atkMotionSkill + 1 + atkCooldownSkill + 1;
                const damage = me.DPS * deltaTime;
                //スキル時間設定
                if(unit.skill.trigger[index] === 'B') {
                    dur = unit.skill.dur.B * (1 + extend);
                } else {
                    dur = unit.skill.dur.A * (1 + extend);
                }
                //特攻倍率
                _.forEach(me.checked_giveDmgMul, function(buffer) {
                    bufferInfo = _.find(me.giveDmgMulList, {buffer: buffer.buffer, awaken: buffer.awaken});
                    specialDmgMul = Math.max(specialDmgMul, bufferInfo.dmgMul * me.IsTarget(unit, bufferInfo));
                });
                if(unit.skill.dmgMul.opt[index] === 'あり') {
                    specialDmgMul = Math.max(specialDmgMul, unit.skill.dmgMul.mul[index]);
                }
                //グラフデータ作成
                for(let time = 0; time <= me.timeCap.value; time += deltaTime) {
                    if(HP === 0) {
                        HPchanges.push(0);
                        continue;
                    }
                    mul[0] = specialDmgMul;
                    mul[1] = specialDmgMul;
                    if(time >= (unit.skill.firstTime + count * (dur + unit.skill.interval)) //スキル中
                    && time <= (unit.skill.firstTime + dur + count * (unit.skill.interval + dur))) {
                        skillTimeLapse += deltaTime;
                        if(!isActive) {     //スキル発動時に一度だけ処理
                            isActive = true;
                            skillTimeLapse = time - (unit.skill.firstTime + count * (dur + unit.skill.interval));
                        }
                        if(trigger !== '非スキル中hit') {
                            //mul[0] *= me.EvilPrincessMulti(unit, HP / me.maxHP.value * 100);
                            mul[0] *= mulByNum[Math.min(count, mulByNum.length - 1)];
                            if(me.linkedHP.use) {
                                //mul[1] *= me.EvilPrincessMulti(unit, linkedHP / me.linkedHP.value * 100);
                                mul[1] *= mulByNum[Math.min(count, mulByNum.length - 1)];
                            }
                            //前回プロット時からのヒット数
                            hit = Math.floor((skillTimeLapse * 30 - atkStartupSkill / 2) / atkIntervalSkill + 1)
                                - Math.floor(((skillTimeLapse - deltaTime) * 30 - atkStartupSkill / 2) / atkIntervalSkill + 1);
                            if(hit > 0) {
                                if(target === '射程内' || Number.isInteger(parseInt(target))) {   //射程内
                                    if(me.simultHit.use) {  //引き付け(敵)あり
                                        Array(hit).fill().map(function() {
                                            Array(simultHit).fill().map(function() {
                                                HP -= Math.max(1, Math.floor(HP * HPred / 100 * mul[0]));
                                            });
                                        });
                                    } else {                //引き付け(敵)なし
                                        Array(hit).fill().map(function() {
                                            HP -= Math.max(1, Math.floor(HP * HPred / 100 * mul[0]));
                                        });
                                        if(me.linkedHP.use && linkedHP > 0 && simultHit !== 1) {   //HPリンクあり
                                            Array(hit).fill().map(function() {
                                                HP -= Math.max(1, Math.floor(linkedHP * HPred / 100 * mul[1]));
                                                linkedHP -= Math.max(1, Math.floor(linkedHP * HPred / 100 * mul[1]));
                                            });
                                        }
                                    }
                                } else {    //他
                                    Array(hit).fill().map(function() {
                                        HP -= Math.max(1, Math.floor(HP * HPred / 100 * mul[0]));
                                    });
                                }
                            }
                        }
                    } else {    //非スキル中
                        if(trigger !== 'スキル中hit') {
                            //非スキル中も割合ダメージを生じるユニット用
                        }
                        if(isActive) {     //スキル終了時に一度だけ処理
                            count++;
                            isActive = false;
                            if(trigger !== '非スキル中hit') {
                                //mul[0] *= me.EvilPrincessMulti(unit, HP / me.maxHP.value * 100);
                                //mul[1] *= me.EvilPrincessMulti(unit, linkedHP / me.linkedHP.value * 100);
                                mul[0] *= mulByNum[Math.min(count, mulByNum.length - 1)];
                                mul[1] *= mulByNum[Math.min(count, mulByNum.length - 1)];
                                //最小プロット間隔が1/30秒ではない時にはみ出す分の計算
                                hit = Math.floor((dur * 30 - atkStartupSkill / 2) / atkIntervalSkill + 1)
                                    - Math.floor((skillTimeLapse * 30 - atkStartupSkill / 2) / atkIntervalSkill + 1);
                                if(hit > 0) {
                                    if(target === '射程内' || Number.isInteger(parseInt(target))) {   //射程内
                                        if(me.simultHit.use) {  //引き付け(敵)あり
                                            Array(hit).fill().map(function() {
                                                Array(simultHit).fill().map(function() {
                                                    HP -= Math.max(1, Math.floor(HP * HPred / 100 * mul[0]));
                                                });
                                            });
                                        } else {                //引き付け(敵)なし
                                            Array(hit).fill().map(function() {
                                                HP -= Math.max(1, Math.floor(HP * HPred / 100 * mul[0]));
                                            });
                                            if(me.linkedHP.use && linkedHP > 0 && simultHit !== 1) {   //HPリンクあり
                                                Array(hit).fill().map(function() {
                                                    HP -= Math.max(1, Math.floor(linkedHP * HPred / 100 * mul[1]));
                                                    linkedHP -= Math.max(1, Math.floor(linkedHP * HPred / 100 * mul[1]));
                                                });
                                            }
                                        }
                                    } else {    //他
                                        Array(hit).fill().map(function() {
                                            HP -= Math.max(1, Math.floor(HP * HPred / 100 * mul[0]));
                                        });
                                    }
                                }
                            }
                        }
                    }
                    if(HP <= 0) {
                        HP = 0;
                        HPchanges.push(0);
                    } else {
                        HPchanges.push(HP / me.maxHP.value * 100);
                        HP = _.clamp(HP - damage, 0, me.maxHP.value);
                        if(me.linkedHP.use) {
                            HP = _.clamp(linkedHP - damage, 0 , damage);
                            linkedHP = _.clamp(linkedHP - damage, 0, me.linkedHP.value);
                        }
                    }
                }
                return _.clone(HPchanges);
            }
        }
    },
    methods: {
        //入力制限
        LimitNum(num, min, max, event) {
            const me = this;
            let value = parseFloat(event.target.value);
            if(Number.isNaN(value) || value < min) {
                value = min;
            } else if(value > max) {
                value = max;
            }
            num.value = value;
            me.$forceUpdate();
        },
        //入力制限(整数)
        LimitNumInt(num, min, max, event) {
            const me = this;
            let value = parseInt(event.target.value);
            if(Number.isNaN(value) || value < min) {
                value = min;
            } else if(value > max) {
                value = max;
            }
            num.value = value;
            me.$forceUpdate();
        },
        //スキル秒数制限(整数)
        LimitSkill(num, key, min, max, event) {
            const me = this;
            let value = parseInt(event.target.value);
            if(Number.isNaN(value)) {
                value = null;
            } else if((Number.isNaN(value) && value.length > 0) || value < min) {
                value = min;
            } else if(value > max) {
                value = max;
            }
            switch(key) {
                case 'A':
                    num.A = value;
                    break;
                case 'B':
                    num.B = value;
                    break;
                default:
            }
            me.$forceUpdate();
        },
        //HP減少率制限
        LimitHPred(item, index, event) {
            const me = this;
            let value = parseFloat(event.target.value);
            if(Number.isNaN(value) || value < 0) {
                value = 0;
            } else if(value > 100) {
                value = 100;
            }
            item.HPred.splice(index, 1, value);
            me.$forceUpdate();
        },
        //特攻倍率制限
        LimitDmgMul(item, index, event) {
            const me = this;
            let value = parseFloat(event.target.value);
            if(Number.isNaN(value) || value < 0) {
                value = 0;
            }
            item.mul.splice(index, 1, value);
            me.$forceUpdate();
        },
        //スキル回数倍率制限
        LimitMulByNum(item, index1, index2, event) {
            const me = this;
            let value = parseFloat(event.target.value);
            if(Number.isNaN(value) || value < 0) {
                value = 0;
            }
            item.mulByNum[index1][index2] = value;
            me.$forceUpdate();
        },
        //フレーム数制限
        LimitAtkInterval(item, key, event) {
            const me = this;
            let value = parseInt(event.target.value);
            if(Number.isNaN(value) || value < 1) {
                value = 1;
            }
            item[key] = value;
            me.$forceUpdate();
        },
        //空以外の選択済みの値と同じ時falseを返す
        IsUndeplicated(selected, index, option) {
            const isSelected = selected.some(elem => {
                return elem === option;
            });
            return !isSelected || selected[index] === option || option === '';
        },
        //空以外の選択済みの値と同じ時falseを返す(その他用)
        IsUndeplicated_note(selected, index, option) {
            if(option === '女性' || option === '男性') {
                const isSelected = selected.some(elem => {
                    return elem === '女性' || elem === '男性';
                });
                return !isSelected || selected[index] === '女性' || selected[index] === '男性';
            } else {
                const isSelected = selected.some(elem => {
                    return elem === option;
                });
                return !isSelected || selected[index] === option || option === '';
            }
        },
        //ユニットデータ追加用モーダル(スキル発動時発生型)
        OpenModal_onSkillAct() {
            const me = this;
            me.newUnitData_onSkillAct = _.cloneDeep(unitDataTemplate_onSkillAct);
            me.addUnitAlart = '';
            me.modal_skillAwaken[0] = true;
            me.modal_skillAwaken[1] = true;
            me.modal_onSkillAct = true;
        },
        //ユニットデータ整形追加(スキル発動時発生型)
        AddUnit_onSkillAct() {
            const me = this;
            const alartText = [];
            const fillSkill = [false, false];
            const unitInfo = me.newUnitData_onSkillAct.unitInfo;
            const skill = me.newUnitData_onSkillAct.skill;
            //ユニット名
            if(_.isEmpty(unitInfo.unitName)) {
                alartText.push('ユニット名');
            }
            //配置型
            if(_.isEmpty(unitInfo.deployType)) {
                alartText.push('配置型');
            }
            //レアリティ
            if(_.isEmpty(unitInfo.rarity)) {
                alartText.push('レアリティ');
            }
            //クラス
            unitInfo.unitClass.options = _.compact(unitInfo.unitClass.options);
            unitInfo.unitClass.selected = unitInfo.unitClass.options[0];
            if(_.isEmpty(unitInfo.unitClass.options)) {
                alartText.push('クラス');
                unitInfo.unitClass.options.push('');
            } else {
                unitInfo.unitClass.selectable = unitInfo.unitClass.options.length > 1;
            }
            //好感度ボーナス
            if(_.isEmpty(unitInfo.affection.bonus)) {
                alartText.push('好感度ボーナス');
            } else {
                switch(unitInfo.affection.bonus) {
                    case '再動短縮':
                        unitInfo.affection.percentage = 150;
                        break;
                    case '時間延長':
                        unitInfo.affection.percentage = 100;
                        break;
                    default:
                        unitInfo.affection.percentage = null;
                }
            }
            //スキル情報
            for(let i = 0; i < 2; i++) {
                if(!me.modal_skillAwaken[i]) continue;
                switch(skill.trans[i]) {
                    case '-':
                        fillSkill[i] = !_.isNil(skill.CT_uncurr[i].A) && !_.isNil(skill.dur_uncurr[i].A);
                        break;
                    case '交互':
                    case '初回A':
                        fillSkill[i] = !skill.trigger[i]
                                    && !_.isNil(skill.CT_uncurr[i].A) && !_.isNil(skill.dur_uncurr[i].A)
                                    && !_.isNil(skill.CT_uncurr[i].B) && !_.isNil(skill.dur_uncurr[i].B);
                        break;
                    default:
                }
                if(!fillSkill[i]) {
                    alartText.push(`${i === 0 ? '通常' : '覚醒'}スキル`)
                }
            }
            skill.awaken.selectable = fillSkill[0] && fillSkill[1];
            skill.awaken.selected = fillSkill[0] ? '通常' : '覚醒';

            if(_.isEmpty(alartText)) {
                //必須事項全記入
                //id付与
                me.newUnitData_onSkillAct.id = me.unitsList_onSkillAct[me.unitsList_onSkillAct.length - 1].id + 1;
                //属性詰め&整形
                unitInfo.attribution = _.compact(unitInfo.attribution);
                if(_.isEmpty(unitInfo.attribution)) {
                    unitInfo.attribution.push('なし');
                }
                //その他詰め
                unitInfo.note = _.compact(unitInfo.note);
                //スキル整形
                for(let i = 0; i < 2; i++) {
                    if(fillSkill[i]) {
                        switch(skill.trans[i]) {
                            case '-':
                                //Bの情報捨て
                                skill.CT_uncurr[i].B = null;
                                skill.dur_uncurr[i].B = null;
                                skill.trigger[i] = '-';
                                break;
                            case '交互':
                            case '初回A':
                                break;
                            default:
                        }
                        //特攻整形
                        if(skill.dmgMul.opt[i]) {
                            skill.dmgMul.opt[i] = 'あり';
                        } else {
                            skill.dmgMul.opt[i] = '-';
                            skill.dmgMul.mul[i] = 1;
                            skill.dmgMul.target[i] = null;
                        }
                    } else {
                        //全部リセット
                        skill.target[i] = null;
                        skill.CT_uncurr[i].A = null;
                        skill.CT_uncurr[i].B = null;
                        skill.dur_uncurr[i].A = null;
                        skill.dur_uncurr[i].B = null;
                        skill.trigger[i] = null;
                        skill.mulByNum[i] = [ 1 ];
                        skill.dmgMul.opt[i] = '-';
                        skill.dmgMul.mul[i] = 1;
                        skill.dmgMul.target[i] = null;
                    }
                }
                me.unitsList_onSkillAct.push(me.newUnitData_onSkillAct);
                me.nUnitsAdded_onSkillAct++;
                me.modal_onSkillAct = false;
            } else {
                //記入漏れあり
                me.addUnitAlart = '※以下の事項が記入されてません\n'
                _.forEach(alartText, function(text, index, array) {
                    me.addUnitAlart += text;
                    if(index < array.length - 1) {
                        me.addUnitAlart += '、';
                    }
                })
            }
        },
        //ユニットデータ追加用モーダル(攻撃ヒット時発生型)
        OpenModal_onHit() {
            const me = this;
            me.newUnitData_onHit = _.cloneDeep(unitDataTemplate_onHit);
            me.addUnitAlart = '';
            me.modal_skillAwaken[0] = true;
            me.modal_skillAwaken[1] = true;
            me.modal_atkInterval[0] = false;
            me.modal_atkInterval[1] = true;
            me.modal_atkInterval[2] = true;
            me.modal_onHit = true;
        },
        //ユニットデータ整形追加(攻撃ヒット発生型)
        AddUnit_onHit() {
            const me = this;
            const alartText = [];
            const fillAtkInterval = [false, false, false];
            const fillSkill = [false, false];
            const unitInfo = me.newUnitData_onHit.unitInfo;
            const skill = me.newUnitData_onHit.skill;
            //ユニット名
            if(_.isEmpty(unitInfo.unitName)) {
                alartText.push('ユニット名');
            }
            //配置型
            if(_.isEmpty(unitInfo.deployType)) {
                alartText.push('配置型');
            }
            //レアリティ
            if(_.isEmpty(unitInfo.rarity)) {
                alartText.push('レアリティ');
            }
            //クラス
            unitInfo.unitClass.options = _.compact(unitInfo.unitClass.options);
            unitInfo.unitClass.selected = unitInfo.unitClass.options[0];
            if(_.isEmpty(unitInfo.unitClass.options)) {
                alartText.push('クラス');
                unitInfo.unitClass.options.push('');
            } else {
                unitInfo.unitClass.selectable = unitInfo.unitClass.options.length > 1;
            }
            //好感度ボーナス
            if(_.isEmpty(unitInfo.affection.bonus)) {
                alartText.push('好感度ボーナス')
            } else {
                switch(unitInfo.affection.bonus) {
                    case '再動短縮':
                    case '攻撃硬直':
                        unitInfo.affection.percentage = 150;
                        break;
                    case '時間延長':
                        unitInfo.affection.percentage = 100;
                        break;
                    default:
                        unitInfo.affection.percentage = null;
                }
            }
            //攻撃間隔
            for(let i = 0; i < 3; i++) {
                if(!me.modal_atkInterval[i])   continue;
                fillAtkInterval[i] = unitInfo.atkInterval_uncurr[i].startup > 1
                                    && unitInfo.atkInterval_uncurr[i].remain > 1
                                    && unitInfo.atkInterval_uncurr[i].cooldown > 1;
                if(!fillAtkInterval[i]) {
                    alartText.push(`${i === 0 ? '非' : i === 1 ? '通常' : '覚醒'}スキル中の攻撃速度`)
                }
            }
            //スキル情報
            for(let i = 0; i < 2; i++) {
                if(!me.modal_skillAwaken[i]) continue;
                switch(skill.trans[i]) {
                    case '-':
                        fillSkill[i] = !_.isNil(skill.CT_uncurr[i].A) && !_.isNil(skill.dur_uncurr[i].A);
                        break;
                    case '交互':
                    case '初回A':
                        fillSkill[i] = !skill.trigger[i]
                                    && !_.isNil(skill.CT_uncurr[i].A) && !_.isNil(skill.dur_uncurr[i].A)
                                    && !_.isNil(skill.CT_uncurr[i].B) && !_.isNil(skill.dur_uncurr[i].B);
                        break;
                    default:
                }
                if(!fillSkill[i]) {
                    alartText.push(`${i === 0 ? '通常' : '覚醒'}スキル`)
                }
            }
            skill.awaken.selectable = fillSkill[0] && fillSkill[1];
            skill.awaken.selected = fillSkill[0] ? '通常' : '覚醒';

            if(_.isEmpty(alartText)) {
                //必須事項全記入
                //id付与
                me.newUnitData_onHit.id = me.unitsList_onHit[me.unitsList_onHit.length - 1].id + 1;
                //属性詰め&整形
                unitInfo.attribution = _.compact(unitInfo.attribution);
                if(_.isEmpty(unitInfo.attribution)) {
                    unitInfo.attribution.push('なし');
                }
                //その他詰め
                unitInfo.note = _.compact(unitInfo.note);
                //攻撃速度整形
                for(let i = 0; i < 3; i++) {
                    if(fillAtkInterval[i])  continue;
                    unitInfo.atkInterval_uncurr[i].startup = null;
                    unitInfo.atkInterval_uncurr[i].remain = null;
                    unitInfo.atkInterval_uncurr[i].cooldown = null;
                }
                //スキル整形
                for(let i = 0; i < 2; i++) {
                    if(fillSkill[i]) {
                        switch(skill.trans[i]) {
                            case '-':
                                //Bの情報捨て
                                skill.CT_uncurr[i].B = null;
                                skill.dur_uncurr[i].B = null;
                                skill.trigger[i] = '-';
                                break;
                            case '交互':
                            case '初回A':
                                break;
                            default:
                        }
                        //特攻整形
                        if(skill.dmgMul.opt[i]) {
                            skill.dmgMul.opt[i] = 'あり';
                        } else {
                            skill.dmgMul.opt[i] = '-';
                            skill.dmgMul.mul[i] = 1;
                            skill.dmgMul.target[i] = null;
                        }
                    } else {
                        //全部リセット
                        skill.target[i] = null;
                        skill.CT_uncurr[i].A = null;
                        skill.CT_uncurr[i].B = null;
                        skill.dur_uncurr[i].A = null;
                        skill.dur_uncurr[i].B = null;
                        skill.trigger[i] = null;
                        skill.mulByNum[i] = [ 1 ];
                        skill.dmgMul.opt[i] = '-';
                        skill.dmgMul.mul[i] = 1;
                        skill.dmgMul.target[i] = null;
                    }
                }
                me.unitsList_onHit.push(me.newUnitData_onHit);
                me.nUnitsAdded_onHit++;
                me.modal_onHit = false;
            } else {
                //記入漏れあり
                me.addUnitAlart = '※以下の事項が記入されてません\n'
                _.forEach(alartText, function(text, index, array) {
                    me.addUnitAlart += text;
                    if(index < array.length - 1) {
                        me.addUnitAlart += '、';
                    }
                })
            }
        },
        //グラフ作成
        Chart() {
            const me = this;
            //プロット数
            me.plotNum = Math.min(me.timeCap.value * 30, _.floor(window.innerWidth, -2) * 3);
            //グラフデータ作成
            me.SetGraphData;
            //グラフの枠線の色
            const xAxisColor = [];
            const yAxisColor = [];
            for(let i = 0; i <= 10; i++) {
                if(i === 0 || i === 10) {
                    xAxisColor.push('black');
                    yAxisColor.push('black');
                } else if(i === 5 && window.innerWidth <= 500) {
                    xAxisColor.push('black');
                    yAxisColor.push('rgba(0, 0, 0, 0.1)')
                } else {
                    xAxisColor.push('rgba(0, 0, 0, 0.1)')
                    yAxisColor.push('rgba(0, 0, 0, 0.1)')
                }
            }
            //ツールチップの位置
            Chart.Tooltip.positioners.custom = function(elements, position) {
                if (!elements.length) {
                    return false;
                }
                const area = elements[0]._chart.chartArea;
                if(position.x < (area.left + area.right) / 2) {
                    return {
                        x: area.right - 120,
                        y: area.bottom
                    };
                } else {
                    return {
                        x: 200,
                        y: area.bottom
                    };
                }
            };
            //グラフ作成
            const ctx = document.getElementById('charts').getContext('2d');
            me.canvas = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [...Array(me.plotNum + 1)].map((_, i) => i * me.timeCap.value / me.plotNum),
                    datasets: me.datasets
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    elements: {
                        line: {
                            borderWidth: 3,
                            hoverBorderWidth: 5,
                            tension: 0, 
                            fill: false,
                            steppedLine: true
                        }
                    },
                    legend: {       //凡例
                        position: window.innerWidth > 800 ? 'right' : 'bottom',
                        labels: {
                            fontSize: window.innerWidth > 800 ? 16 : 12,
                            fontColor: 'black'
                        },
                    },
                    tooltips: {
                        mode: 'interpolate',
                        intersect: false,
                        position: 'custom',
                        titleFontSize: 16,
                        bodyFontSize: 14,
                        custom: function(tooltipModel) {
                            tooltipModel.caretSize = 0;
                        },
                        callbacks: {
                            title: function (tooltipItem, data) {
                                return tooltipItem[0].xLabel.toFixed(2) + '秒';
                            },
                            label: function (tooltipItem, data) {
                                const tooltipLabel = [];
                                const added = [];
                                if(!_.includes(added, data.datasets[tooltipItem.datasetIndex].label)) {
                                    tooltipLabel.push(
                                        data.datasets[tooltipItem.datasetIndex].label
                                        + ': '
                                        + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toFixed(2)
                                        + '%'
                                    );
                                    added.push(data.datasets[tooltipItem.datasetIndex].label);
                                }
                                return tooltipLabel;
                            }
                        },
                        itemSort: function(item0, item1) {
                            return me.sortGraphTooltip ? item0.yLabel - item1.yLabel : 0;
                        }
                    },
                    scales: {
                        xAxes: [{
                            id: 'x-axis',
                            scaleLabel: {
                                display: true,
                                fontSize: 16,
                                fontColor: 'black',
                                labelString: '時間',
                            },
                            gridLines: {
                                color: xAxisColor,
                                drawTicks: false,
                            },
                            ticks: {
                                minRotation: 0,
                                maxRotation: 0,
                                autoSkip: true,
                                maxTicksLimit: window.innerWidth > 500 ? 10 : 5,
                                fontSize: 14,
                                fontColor: 'black',
                                padding: 10,
                                callback: function(value) {
                                    return value + '秒'
                                }
                            },
                        }],
                        yAxes: [{
                            id: 'y-axis',
                            scaleLabel: {
                                display: true,
                                fontSize: 16,
                                fontColor: 'black',
                                labelString: 'HP'
                            },
                            gridLines: {
                                color: yAxisColor,
                                drawTicks: false,
                            },
                            ticks: {
                                min: 0,
                                max: 100,
                                stepSize: 10,
                                fontSize: 14,
                                fontColor: 'black',
                                padding: 10,
                                callback: function(value) {
                                    return value + '%'
                                }
                            }
                        }]
                    },
                    plugins: {
                        crosshair: {
                            line: {
                                color: 'rgba(0, 0, 0, 1)',
                                width: 1
                            },
                            sync: {
                                enabled: false,
                                group: 1,
                                suppressTooltips: true
                            },
                            zoom: {
                                enabled: false
                            }
                        }
                    },
                    animation: {
                        duration: 0
                    },
                    responsiveAnimationDuration: 0,
                }
            });
            //グラフ保存時に背景を白にする
            Chart.plugins.register({
                beforeDraw: function(c){
                    const ctx = c.chart.ctx;
                    ctx.fillStyle = 'white';
                    ctx.fillRect(0, 0, c.chart.width, c.chart.height);
                }
            });
        }
    }
});
