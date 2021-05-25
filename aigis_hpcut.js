//1000行超えるとは思わなんだ_:(´ཀ`」∠):_
//2000行超えちゃったよ･･･0(:3　)～ ('､3_ヽ)_
//初動短縮リスト
var rWTlistElem = [
    {
        id: 0, reducer: 'エンプレス', rate: 15, disabled: false,
        AndOr: 'or', target: [ { '-': [] } ],
        tooltip: '[編成バフ] 全味方の初動-15%'
    },
    {
        id: 1, reducer: 'アウトクラトール', rate: 20, disabled: false,
        AndOr: 'or', target: [ { '-': [] } ],
        tooltip: '[編成バフ] 全味方の初動-20%'
    },
    {
        id: 2, reducer: '発明家', rate: 20, disabled: true,
        AndOr: 'or', target: [ { 'attribution': [ '機械' ] } ],
        tooltip: '[編成バフ] 属性：機械の初動-20%'
    },
    {
        id: 3, reducer: '大発明家', rate: 30, disabled: true,
        AndOr: 'or', target: [ { 'attribution': [ '機械' ] } ],
        tooltip: '[編成バフ] 属性：機械の初動-30%'
    },
    {
        id: 4, reducer: '白浴衣の弓乙女ナナリー', rate: 15, disabled: false,
        AndOr: 'or', target: [ { 'rarity': [ '白', '青', '金', '銀', '銅' ] } ],
        tooltip: '[編成バフ] レアリティ：白以下の初動-15%'
    },
    {
        id: 5, reducer: '陰陽師タマミ', rate: 25, disabled: false,
        AndOr: 'or', target: [ { 'rarity': [ '白' ] } ],
        tooltip: '[編成バフ] レアリティ：白の初動-25%'
    },
    {
        id: 6, reducer: 'ロゼット', rate: 30, disabled: true,
        AndOr: 'or', target: [ { 'rarity': [ '銀' ] } ],
        tooltip: '[編成バフ] レアリティ：銀の初動-30%'
    },
    {
        id: 7, reducer: '波斬りの剣士サンドラ', rate: 30, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [ 'ソードマスター系', 'ソードマスター', '剣聖', 'デッドリーエッジ', '剣神' ] },
            { 'attribution': [ 'サマー' ] }
        ],
        tooltip:
        '[編成バフ] クラス：ソードマスター系、<br>\
         　　　　　 属性：サマーの初動-30%'
    }
];
//再動短縮(近・遠・両)
var rCTdepTypeElem = [
    {
        id: 0, deployType: '近接型', rate: 0
    },
    {
        id: 1, deployType: '遠距離型', rate: 0
    },
    {
        id: 2, deployType: '遠近両型', rate: 0
    }
];
//再動短縮リスト
var rCTlistElem = [
    {
        id: 0, reducer: '妖狐絢爛', rate: 50, disabled: false,
        AndOr: 'or', target: [ { 'attribution': [ '妖怪' ] } ],
        tooltip: '[配置バフ] 属性：妖怪の再動-50%'
    },
    {
        id: 1, reducer: 'メイガスアデプト', rate: 50, disabled: false,
        AndOr: 'or', target: [ { 'attribution': [ '魔術師' ] } ],
        tooltip: '[配置バフ] 属性：魔術師の再動-50%'
    },
    {
        id: 2, reducer: '天穿の槍士フィロ', rate: 50, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [
                'ランスマスター系', 'ランスマスター', '槍聖',
                'ワルキューレ系', 'ワルキューレ', 'ユニコーンナイト', 'ブリュンヒルデ', 'レギンレイヴ', 'ゲイレルル',
                'ロイヤルガード系', 'ロイヤルガード', 'ロイヤルオーダー', 'ロードオブロイヤルズ', 'セイクリッドガード'
            ] }
        ],
        tooltip:
        '[配置バフ] クラス：ランスマスター系・<br>\
         　　　　　 ワルキューレ系・ロイヤルガード系の再動-50%'
    },
    {
        id: 3, reducer: '犬神ツムジ', rate: 50, disabled: false,
        AndOr: 'or', target: [
            { 'unitClass': [
                '犬神系', '犬神', '犬神頭',
                '陰陽師系', '陰陽師', '陰陽頭', '悟徳陰陽頭', '召鬼陰陽頭',
                '邪仙系', '邪仙', '大邪仙',
                '呪術使い系', '呪術使い', '呪術師', '大呪術師長', '大呪術師祖', '妖厄神'
            ] }
        ],
        tooltip:
        '[配置バフ] クラス：犬神系・陰陽師系・<br>\
         　　　　　 邪仙系・呪術使い系の再動-50%'
    },
    {
        id: 4, reducer: '約束の花嫁ディエーラ', rate: 45, disabled: false,
        AndOr: 'or', target: [ { 'attribution': [ 'ｼﾞｭｰﾝﾌﾞﾗｲﾄﾞ' ] } ],
        tooltip: '[配置バフ] 属性：ジューンブライドの再動-45%'
    },
    {
        id: 5, reducer: 'ねこみみ購買部ミネット', rate: 40, disabled: true,
        AndOr: 'or', target: [ { 'attribution': [ '学園' ] } ],
        tooltip: '[配置バフ] 属性：学園の再動-40%'
    }
];
//スキル時間延長
var skillExtendListElem = [
    {
        id: 0, extender: '時空魔法の優等生トワ(未覚醒)', rate: 10, disabled: false,
        AndOr: 'or', target: [ { 'deployType': [ '遠距離型' ] } ],
        tooltip: '[編成バフ] 遠距離ユニットのスキル時間+10%'
    },
    {
        id: 1, extender: '時空魔法の優等生トワ', rate: 15, disabled: false,
        AndOr: 'or', target: [ { 'deployType': [ '遠距離型' ] } ],
        tooltip: '[編成バフ] 遠距離ユニットのスキル時間+15%'
    }
];
//硬直短縮(編成バフ)
var hasteTeemListElem = [
    {
        id: 0, haster: '時の調停者トワ', rate: 20, disabled: false,
        AndOr: 'or', target: [ { '-': [] } ],
        tooltip: '[編成バフ] 全味方の攻撃硬直-20%'
    },
    {
        id: 1, haster: '帝国辺境総督アレイダ(未覚醒)', rate: 25, disabled: true,
        AndOr: 'and', target: [ { 'deployType': [ '近接型' ] }, { 'attribution': [ '白の帝国' ] } ],
        tooltip: '[編成バフ] 属性：帝国の近接ユニットの攻撃硬直-25%'
    },
    {
        id: 2, haster: '帝国辺境総督アレイダ', rate: 35, disabled: true,
        AndOr: 'and', target: [ { 'deployType': [ '近接型' ] }, { 'attribution': [ '白の帝国' ] } ],
        tooltip: '[編成バフ] 属性：帝国の近接ユニットの攻撃硬直-35%'
    },
    {
        id: 3, haster: '雷光の魔剣士タラニア', rate: 20, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [
                '魔法剣士系', '魔法剣士', 'ルーンフェンサー', 'ルーンロード', 'ルーンデルヴァー', 'ルーンスレイヤー',
                'メイジ系', '下級メイジ', 'メイジ', 'ウォーロック', 'アークメイジ', 'メイガスアデプト', 'メイジデストラクト'
            ] }
        ],
        tooltip: '[編成バフ] クラス：魔法剣士系・メイジ系の攻撃硬直-20%'
    },
    {
        id: 4, haster: '砲術教官エイプリル', rate: 30, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [
                '砲術士系', '砲術士', '重砲士', 'キャノンマスター', 'ハイキャノンマスター', '超重巨砲士',
                '重装砲兵系', '重装砲兵', 'キャノンアーマー', 'ギガキャノンアーマー', 'バスターアーマー', 'フォートレス',
                'モンスタースレイヤー系'
            ] }
        ],
        tooltip:
        '[編成バフ] クラス：砲術士系・重装砲兵系・<br>\
         　　　　　 モンスタースレイヤー系の攻撃硬直-30%'
    },
    {
        id: 5, haster: '湯けむり吸血鬼エマ', rate: 20, disabled: true,
        AndOr: 'or', target: [ { 'attribution': [ 'アンデッド', '温泉' ] } ],
        tooltip: '[編成バフ] 属性：アンデッド・温泉の攻撃硬直-20%'
    }
];
//硬直短縮(スキル)
var hasteSkillListElem = [
    {
        id: 0, haster: '付与魔術師ハーニィ', atkCooldown: 11, disabled: false,
        AndOr: 'or', target: [ { 'deployType': [ '近接型' ] } ],
        tooltip: '[スキルバフ] 近接ユニットの攻撃硬直5.5f化'
    },
    {
        id: 1, haster: '弓兵の湯浴みソーマ', atkCooldown: 4, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [ 'アーチャー系', '下級アーチャー', 'アーチャー', 'スナイパー', 'アルテミス', 'セレーネ', 'ラピッドシューター' ] }
        ],
        tooltip: '[スキルバフ] クラス：アーチャー系の攻撃硬直2f化'
    },
    {
        id: 2, haster: '時の調停者トワ(通常スキル)', atkCooldown: 11, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [
                'ウィッチ系', 'ウィッチ', 'ロードウィッチ', 'アークウィッチ', 'ホーリーウィッチ', 'ソーサレス',
                'クロノウィッチ系', 'クロノウィッチ', 'アーククロノウィッチ', 'クロノマスター', 'クロノマンサー'
            ] }
        ],
        tooltip: '[スキルバフ] クラス：ウィッチ系・クロノウィッチ系の攻撃硬直5.5f化'
    },
    {
        id: 3, haster: '時の調停者トワ(覚醒スキル)', atkCooldown: 11, disabled: true,
        AndOr: 'or', target: [
            { 'unitClass': [
                'メイジ系', '下級メイジ', 'メイジ', 'ウォーロック', 'アークメイジ', 'メイガスアデプト', 'メイジデストラクト',
                'ウィッチ系', 'ウィッチ', 'ロードウィッチ', 'アークウィッチ', 'ホーリーウィッチ', 'ソーサレス',
                'クロノウィッチ系', 'クロノウィッチ', 'アーククロノウィッチ', 'クロノマスター', 'クロノマンサー'
            ] }
        ],
        tooltip:
        '[スキルバフ] クラス：メイジ系・ウィッチ系・<br>\
         　　　　　　 クロノウィッチ系の攻撃硬直5.5f化'
    },
    {
        id: 4, haster: '胡喜美', atkCooldown: 21, disabled: true,
        AndOr: 'or', target: [ { 'attribution': [ '仙人' ] } ],
        tooltip: '[スキルバフ] 属性：仙人の攻撃硬直10.5f化'
    },
    {
        id: 5, haster: '秋祭の大魔女デスピア', atkCooldown: 11, disabled: true,
        AndOr: 'or', target: [ { 'attribution': [ 'ハロウィン' ] } ],
        tooltip: '[スキルバフ] 属性：ハロウィンの攻撃硬直5.5f化'
    },
    {
        id: 6, haster: '聖夜の炸裂海賊デューオ', atkCooldown: 16, disabled: true,
        AndOr: 'or', target: [ { 'attribution': [ 'クリスマス' ] } ],
        tooltip: '[スキルバフ] 属性：クリスマスの攻撃硬直8f化'
    }
];
//ユニットリスト
var unitsList_onSkillActElem = [
    {
        id: 0,
        unitInfo: {
            unitName: '九尾狐カヨウ', deployType: '近接型', rarity: '黒',
            unitClass: {
                selectable: true, selected: '妖狐絢爛',
                options: [ '妖狐系', '妖狐絢爛' ]
            },
            attribution: [ '妖怪', '東の国' ],
            affection: { percentage: 150, bonus: '再動短縮', changeRate: null }
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
            dur_uncurr: [ { A: 30, B: null }, { A: 0, B: 30 } ],
            firstTime: null, interval: null,
            trigger: [ null, 'A' ], trans: [ '-', '交互' ], HPred: [ 0, 20 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ '-', '-' ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: 1,
        unitInfo: {
            unitName: '黒紫の巫女キキョウ', deployType: '遠距離型', rarity: '黒',
            unitClass: {
                selectable: false, selected: 'シャーマン系',
                options: [ 'シャーマン系' ]
            },
            attribution: [ '人間', '東の国' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null }
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
            dur_uncurr: [ { A: 0, B: 0 }, { A: 10, B: 20 } ],
            firstTime: null, interval: null,
            trigger: [ null, 'B' ], trans: [ '交互', '交互' ], HPred: [ 0, 5 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ '-', '-' ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: 2,
        unitInfo: {
            unitName: '迎春の呪姫オロチヒメ', deployType: '遠距離型', rarity: '黒',
            unitClass: {
                selectable: false, selected: '呪術使い系',
                options: [ '呪術使い系' ]
            },
            attribution: [ '人間', 'お正月' ],
            affection: { percentage: 150, bonus: '再動短縮', changeRate: null }
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
        id: 3,
        unitInfo: {
            unitName: '混沌霊使いニーヴ', deployType: '遠距離型', rarity: '黒',
            unitClass: {
                selectable: false, selected: 'エレメンタラー系',
                options: [ 'エレメンタラー系' ]
            },
            attribution: [ '人間' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null }
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
            dur_uncurr: [ { A: 0, B: null }, { A: Infinity, B: null } ],
            firstTime: null, interval: null,
            trigger: [ '-', null ], trans: [ '-', '-' ], HPred: [ 10, 0 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ '-', '-' ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: 4,
        unitInfo: {
            unitName: '猫又コハル', deployType: '遠距離型', rarity: '黒',
            unitClass: {
                selectable: false, selected: '猫又系',
                options: [ '猫又系' ]
            },
            attribution: [ '妖怪', '東の国' ],
            affection: { percentage: 100, bonus: '時間延長', changeRate: null }
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
        id: 5,
        unitInfo: {
            unitName: '清心の花嫁スイレン', deployType: '近接型', rarity: '白',
            unitClass: {
                selectable: false, selected: 'ドラゴンライダー系',
                options: [ 'ドラゴンライダー系' ]
            },
            attribution: [ '人間', 'ｼﾞｭｰﾝﾌﾞﾗｲﾄﾞ' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null }
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
            dur_uncurr: [ { A: 0, B: null }, { A: 0, B: 0 } ],
            firstTime: null, interval: null,
            trigger: [ '-', 'B' ], trans: [ '-', '初回A' ], HPred: [ 20, 20 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { opt: [ '-', '-' ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: 6,
        unitInfo: {
            unitName: '召喚士アクアマリー', deployType: '遠距離型', rarity: '白',
            unitClass: {
                selectable: false, selected: 'サモナー系',
                options: [ 'サモナー系' ]
            },
            attribution: [ '人間', '魔術師' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null }
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
        id: 7,
        unitInfo: {
            unitName: '祝祭の南瓜姫ミサ', deployType: '近接型', rarity: '黒',
            unitClass: {
                selectable: true, selected: 'イビルクイーン',
                options: [ 'イビルクイーン', 'イビルシーカー', 'デスブリンガー' ]
            },
            attribution: [ 'ハロウィン' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null }
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
        id: 8,
        unitInfo: {
            unitName: '海魔の麗姫スキュレ', deployType: '近接型', rarity: '白',
            unitClass: {
                selectable: true, selected: 'デスブリンガー',
                options: [ 'イビルクイーン', 'デスブリンガー' ]
            },
            attribution: [ 'なし' ],
            affection: { percentage: 100, bonus: '時間延長', changeRate: null }
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
            dmgMul: { opt: [ 'あり', 'あり' ], mul: [ 1.5, 2.5 ], target: [ '魔法敵', '魔法敵' ] }
        }
    },
    {
        id: 9,
        unitInfo: {
            unitName: '狼剣の魔姫ピリカ', deployType: '近接型', rarity: '白',
            unitClass: {
                selectable: true, selected: 'デスブリンガー',
                options: [ 'イビルクイーン', 'デスブリンガー' ]
            },
            attribution: [ 'なし' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null }
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
        id: 10,
        unitInfo: {
            unitName: '降魔の戦姫トコヨ', deployType: '近接型', rarity: '青',
            unitClass: {
                selectable: true, selected: 'イビルシーカー',
                options: [ 'イビルクイーン', 'イビルシーカー' ]
            },
            attribution: [ 'なし' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null }
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
var unitsList_onHitElem = [
    {
        id: 0,
        unitInfo: {
            unitName: '犬神シロ', deployType: '近接型', rarity: '黒',
            unitClass: {
                selectable: false, selected: '犬神系',
                options: [ '犬神系' ]
            },
            attribution: [ '妖怪', '東の国' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null },
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
        id: 1,
        unitInfo: {
            unitName: '犬神ツムジ', deployType: '近接型', rarity: '白',
            unitClass: {
                selectable: false, selected: '犬神系',
                options: [ '犬神系' ]
            },
            attribution: [ '妖怪', '東の国' ],
            affection: { percentage: 150, bonus: '攻撃硬直', changeRate: null },
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
        id: 2,
        unitInfo: {
            unitName: '迎春の呪姫オロチヒメ', deployType: '遠距離型', rarity: '黒',
            unitClass: {
                selectable: false, selected: '呪術使い系',
                options: [ '呪術使い系' ]
            },
            attribution: [ '人間', 'お正月' ],
            affection: { percentage: 150, bonus: '再動短縮', changeRate: null },
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
        id: 3,
        unitInfo: {
            unitName: '道化師ワンダーハート', deployType: '遠距離型', rarity: '白',
            unitClass: {
                selectable: false, selected: '道化師系',
                options: [ '道化師系' ]
            },
            attribution: [ '人間' ],
            affection: { percentage: null, bonus: 'その他', changeRate: null },
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
var unitDatatemplate_onSkillAct = {
    id: null,
    unitInfo: {
        unitName: '', deployType: '', rarity: '',
        unitClass: {
            selectable: false, selected: '',
            options: [ '' ]
        },
        attribution: [ '', '', '' ],
        affection: { percentage: null, bonus: '', changeRate: null }
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
var unitDatatemplate_onHit = {
    id: null,
    unitInfo: {
        unitName: '', deployType: '', rarity: '',
        unitClass: {
            selectable: false, selected: '',
            options: [ '' ]
        },
        attribution: [ '', '', '' ],
        affection: { percentage: null, bonus: '', changeRate: null },
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
var vm = new Vue({
    el: '#app',
    data() {
        return {
            rWTlist: rWTlistElem,
            checked_rWT: [],
            rCTdepType: rCTdepTypeElem,
            rCTlist: rCTlistElem,
            checked_rCT: [],
            skillExtendList: skillExtendListElem,
            checked_skillExtend: [],
            hasteTeemList: hasteTeemListElem,
            checked_hasteTeem: [],
            hasteSkillList: hasteSkillListElem,
            checked_hasteSkill: [],
            unitsList_onSkillAct: unitsList_onSkillActElem,
            modal_onSkillAct: false,
            newUnitData_onSkillAct: unitDatatemplate_onSkillAct,        
            unitsList_onHit: unitsList_onHitElem,
            modal_onHit: false,
            newUnitData_onHit: unitDatatemplate_onHit,        
            addUnitAlart: '',
            attribution1: [ '', 'アンデッド', 'エルフ', 'オーク', 'ゴブリン', 'ダークエルフ', 'デーモン', 'ドワーフ', 'ハーフエルフ', 'ハーフデーモン', '魚人', '人間', '仙人', '天界人', '天使', '妖怪', '機械', '獣人', '神', '竜人', '聖霊', '鳥人', 'ねんどろいど', 'なし' ],
            attribution2: [ '', 'ヴァンパイア', 'お正月', 'ちび', 'クリスマス', 'サマー', 'ｼﾞｭｰﾝﾌﾞﾗｲﾄﾞ', 'ハロウィン', 'バレンタイン', '学園', '弓兵', '東の国', '機械', '温泉', '白の帝国', '砂漠の国', '英傑', '魔術師', 'パルス王国', '七つの大罪' ],
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
            DPS: 0,
            plotScaling: 0,
            datasets: [],
            graphHidden_onSkillAct: false,
            graphHidden_onHit: false
        }
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
                let curr = 0;
                let AW = unit.skill.awaken.selected;
                let aff = unit.unitInfo.affection;
                let WT = unit.skill.WT;
                let CT = unit.skill.CT;
                let dur = unit.skill.dur;
                let CT_uncurr = unit.skill.CT_uncurr[AW === '通常' ? 0 : 1];
                let dur_uncurr = unit.skill.dur_uncurr[AW === '通常' ? 0 : 1];
                //150%ボーナスの補正値
                switch(unit.unitInfo.rarity) {
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
                switch(unit.unitInfo.rarity) {
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
        },
        //初動短縮
        SetWTred() {
            return function(unit) {
                let me = this;
                let reduceRate = 0;
                let reducerInfo;
                //クラス・属性の初動短縮
                //自身による効果
                reducerInfo = me.rWTlist.find((elem) => elem.reducer === unit.unitInfo.unitName);
                if(reducerInfo !== undefined) {
                    reduceRate = Math.max(reduceRate, reducerInfo.rate);
                }
                reducerInfo = me.rWTlist.find((elem) => elem.reducer === unit.unitInfo.unitClass.selected);
                if(reducerInfo !== undefined) {
                    reduceRate = Math.max(reduceRate, reducerInfo.rate);
                }
                //選択したオプションによる効果
                me.checked_rWT.forEach(function(reducer) {
                    reducerInfo = me.rWTlist.find((elem) => elem.reducer === reducer);
                    reduceRate = Math.max(reduceRate, reducerInfo.rate * me.IsTarget(unit, reducerInfo));
                })
                return reduceRate / 100;
            }
        },
        //再動短縮
        SetCTred() {
            return function(unit) {
                let me = this;
                let reduceRate;
                let reducerInfo;
                //近接型・遠距離型・遠近両型の再動短縮
                reducerInfo = me.rCTdepType.find((elem) => elem.deployType === unit.unitInfo.deployType);
                reduceRate = reducerInfo.rate;
                //クラス・属性の再動短縮
                //自身による効果
                reducerInfo = me.rCTlist.find((elem) => elem.reducer === unit.unitInfo.unitName);
                if(reducerInfo !== undefined) {
                    reduceRate = Math.max(reduceRate, reducerInfo.rate);
                }
                reducerInfo = me.rCTlist.find((elem) => elem.reducer === unit.unitInfo.unitClass.selected);
                if(reducerInfo !== undefined) {
                    reduceRate = Math.max(reduceRate, reducerInfo.rate);
                }
                //選択したオプションによる効果
                me.checked_rCT.forEach(function(reducer) {
                    reducerInfo = me.rCTlist.find((elem) => elem.reducer === reducer);
                    reduceRate = Math.max(reduceRate, reducerInfo.rate * me.IsTarget(unit, reducerInfo));
                })
                return reduceRate / 100;
            }
        },
        //スキル時間延長
        SetExtend() {
            return function(unit) {
                let me = this;
                let extendRate = 0;
                let extenderInfo;
                //クラス・属性のスキル属性延長
                //自身による効果
                extenderInfo = me.skillExtendList.find((elem) => elem.extender === unit.unitInfo.unitName);
                if(extenderInfo !== undefined) {
                    extendRate = Math.max(extendRate, extenderInfo.rate);
                }
                extenderInfo = me.skillExtendList.find((elem) => elem.extender === unit.unitInfo.unitClass.selected);
                if(extenderInfo !== undefined) {
                    extendRate = Math.max(extendRate, extenderInfo.rate);
                }
                //選択したオプションによる効果
                me.checked_skillExtend.forEach(function(extender) {
                    extenderInfo = me.skillExtendList.find((elem) => elem.extender === extender);
                    extendRate = Math.max(extendRate, extenderInfo.rate * me.IsTarget(unit, extenderInfo));
                })
                return extendRate / 100;
            }
        },
        //硬直短縮編成バフ
        SetHasteRate() {
            return function(unit) {
                let me = this;
                let hasteRate = 0;
                let hasterInfo;
                //クラス・属性の硬直短縮(編成バフ)
                //自身による効果
                hasterInfo = me.hasteTeemList.find((elem) => elem.haster === unit.unitInfo.unitName);
                if(hasterInfo !== undefined) {
                    hasteRate = Math.max(hasteRate, hasterInfo.rate);
                }
                hasterInfo = me.hasteTeemList.find((elem) => elem.haster === unit.unitInfo.unitClass.selected);
                if(hasterInfo !== undefined) {
                    hasteRate = Math.max(hasteRate, hasterInfo.rate);
                }
                //選択したオプションによる効果
                me.checked_hasteTeem.forEach(function(haster) {
                    hasterInfo = me.hasteTeemList.find((elem) => elem.haster === haster);
                    hasteRate = Math.max(hasteRate, hasterInfo.rate * me.IsTarget(unit, hasterInfo));
                })
                return hasteRate / 100;
            }
        },
        //ユニットがバフ等の対象か判定
        IsTarget() {
            return function(unit, info) {
                let isTarget;
                let deployType = unit.unitInfo.deployType;
                let rarity = unit.unitInfo.rarity;
                let unitClass = unit.unitInfo.unitClass.selected;
                let attr = unit.unitInfo.attribution;
                if(info.AndOr === 'and') {
                    isTarget = 1;
                    info.target.forEach(function(tar) {
                        switch(Object.keys(tar)[0]) {
                            case 'deployType':
                                if(tar.deployType.indexOf(deployType) === -1) {
                                    isTarget &= 0;
                                }
                                break;
                             case 'rarity':
                                if(tar.rarity.indexOf(rarity) === -1) {
                                   isTarget &= 0;
                                }
                                break;
                            case 'unitClass':
                                if(tar.unitClass.indexOf(unitClass) === -1) {
                                    isTarget &= 0;
                                }
                                break;
                            case 'attribution':
                                if((new Set([...tar.attribution, ...attr])).size === [...tar.attribution, ...attr].length) {
                                    isTarget &= 0;
                                }
                                break;
                            default:
                        }
                    })
                } else {
                    isTarget = 0;
                    info.target.forEach(function(tar) {
                        switch(Object.keys(tar)[0]) {
                            case 'deployType':
                                if(tar.deployType.indexOf(deployType) !== -1) {
                                    isTarget |= 1;
                                }
                                break;
                             case 'rarity':
                                if(tar.rarity.indexOf(rarity) !== -1) {
                                   isTarget |= 1;
                                }
                                break;
                            case 'unitClass':
                                if(tar.unitClass.indexOf(unitClass) !== -1) {
                                    isTarget |= 1;
                                }
                                break;
                            case 'attribution':
                                if((new Set([...tar.attribution, ...attr])).size !== [...tar.attribution, ...attr].length) {
                                    isTarget |= 1;
                                }
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
                let me = this;
                me.CurrectSkill(unit);
                let WTred = me.SetWTred(unit);
                let CTred = me.SetCTred(unit);
                let extend = me.SetExtend(unit);
                let index = unit.skill.awaken.selected === '通常' ? 0 : 1;
                let WT = unit.skill.WT;
                let CT = unit.skill.CT;
                let dur = unit.skill.dur;
                let firstTime = WT.A * (1 - WTred);
                if(unit.skill.trigger[index] === 'B') {
                    if(me.redeployInterval.use) {
                        firstTime += Math.min(
                                Math.max(dur.A * (1 + extend), 2) + CT.A * (1 - CTred),
                                me.redeployInterval.value + WT.B * (1 - WTred)
                            );
                    } else {
                        firstTime += Math.max(dur.A * (1 + extend), 2) + CT.A * (1 - CTred);
                    }
                }
                return unit.skill.firstTime = firstTime;
            }
        },
        //初回HP減少発生までの時間(攻撃ヒット時発生型)
        SetFirstTime_onHit() {
            return function(unit) {
                let me = this;
                me.CurrectSkill(unit);
                let WTred = me.SetWTred(unit);
                let CTred = me.SetCTred(unit);
                let extend = me.SetExtend(unit);
                let index = unit.skill.awaken.selected === '通常' ? 0 : 1;
                let WT = unit.skill.WT;
                let CT = unit.skill.CT;
                let dur = unit.skill.dur;
                let firstTime = WT.A * (1 - WTred);
                if(unit.skill.trigger[index] === 'B') {     //編集いるかも
                    if(me.redeployInterval.use) {
                        firstTime += Math.min(
                                Math.max(dur.A * (1 + extend), 2) + CT.A * (1 - CTred),
                                me.redeployInterval.value + WT.B * (1 - WTred)
                            );
                    } else {
                        firstTime += Math.max(dur.A * (1 + extend), 2) + CT.A * (1 - CTred);
                    }
                }
                return unit.skill.firstTime = firstTime;
            }
        },
        //HP減少発生の間隔(スキル発動時発生型)
        SetInterval_onSkillAct() {
            return function(unit) {
                me = this;
                me.CurrectSkill(unit);
                let WTred = me.SetWTred(unit);
                let CTred = me.SetCTred(unit);
                let extend = me.SetExtend(unit);
                let index = unit.skill.awaken.selected === '通常' ? 0 : 1;
                let interval = 0;
                let intervalRedeploy = 0;
                let WT = unit.skill.WT;
                let CT = unit.skill.CT;
                let dur = unit.skill.dur;
                switch(unit.skill.trans[index]) {
                    case '-':
                        interval = Math.max(dur.A * (1 + extend), 2) + CT.A * (1 - CTred);
                        intervalRedeploy = me.redeployInterval.value + WT.A * (1 - WTred);
                        break;
                    case '交互':
                        interval = (Math.max(dur.A * (1 + extend), 2) + Math.max(dur.B * (1 + extend), 2)) + (CT.A + CT.B) * (1 - CTred);
                        intervalRedeploy = me.redeployInterval.value
                            + Math.min(
                                WT.A * (1 - WTred) + Math.max(dur.A * (1 + extend), 2) + CT.A * (1 - CTred),
                                WT.B * (1 - WTred) + Math.max(dur.B * (1 + extend), 2) + CT.B * (1 - CTred),
                                me.redeployInterval.value + WT.A * (1 - WTred) + WT.B * (1 - WTred)
                            );
                        break;
                    case '初回A':
                        interval = Math.max(dur.B * (1 + extend), 2) + CT.B * (1 - CTred);
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
                let me = this
                me.CurrectSkill(unit);
                let WTred = me.SetWTred(unit);
                let CTred = me.SetCTred(unit);
                let extend = me.SetExtend(unit);
                let index = unit.skill.awaken.selected === '通常' ? 0 : 1
                let interval = 0;
                let intervalRedeploy = 0;
                let WT = unit.skill.WT;
                let CT = unit.skill.CT;
                let dur = unit.skill.dur;
                switch(unit.skill.trans[index]) {
                    case '-':
                        interval = CT.A * (1 - CTred);
                        intervalRedeploy = me.redeployInterval.value + WT.A * (1 - WTred);
                        break;
                    case '交互':
                        switch(unit.skill.trigger[index]) {
                            case 'A':
                                interval =  Math.max(dur.B * (1 + extend), 2) + (CT.A + CT.B) * (1 - CTred);
                                intervalRedeploy = me.redeployInterval.value
                                    + Math.min(
                                        WT.A * (1 - WTred) + CT.A * (1 - CTred),
                                        WT.B * (1 - WTred) + Math.max(dur.B * (1 + extend), 2) + CT.B * (1 - CTred),
                                    );
                                break;
                            case 'B':
                                interval = Math.max(dur.A * (1 + extend), 2) + (CT.A + CT.B) * (1 - CTred);
                                intervalRedeploy = me.redeployInterval.value
                                    + Math.min(
                                        WT.A * (1 - WTred) + Math.max(dur.A * (1 + extend), 2) + CT.A * (1 - CTred),
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
                let me = this;
                let atkInterval = me.SetAtkIntervalSub(unit, index);
                if(atkInterval.startup !== null) {
                    return (atkInterval.startup + atkInterval.remain + atkInterval.cooldown) / 2;
                } else {
                    return '-';
                }
            }
        },
        SetAtkIntervalSub() {
            return function(unit, index0) {
                let me = this;
                let curr = 0;
                let index1 = index0 === 0 ? 0 : unit.skill.awaken.selected === '通常' ? 1 : 2;
                let hasteRate = me.SetHasteRate(unit);
                let aff = unit.unitInfo.affection;
                let atkStartup = unit.unitInfo.atkInterval_uncurr[index1].startup;
                let atkRemain = unit.unitInfo.atkInterval_uncurr[index1].remain;
                let atkCooldown = unit.unitInfo.atkInterval_uncurr[index1].cooldown;
                let atkCooldownBySkill = 0;
                let hasterInfo;
                //150%ボーナスの補正値
                switch(unit.unitInfo.rarity) {
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
                hasterInfo = me.hasteSkillList.find((elem) => elem.haster === unit.unitInfo.unitName);
                if(hasterInfo !== undefined) {
                    atkCooldownBySkill = Math.max(atkCooldownBySkill, hasterInfo.atkCooldown);
                }
                hasterInfo = me.hasteSkillList.find((elem) => elem.haster === unit.unitInfo.unitClass.selected);
                if(hasterInfo !== undefined) {
                    atkCooldownBySkill = Math.max(atkCooldownBySkill, hasterInfo.atkCooldown);
                }
                //選択したオプションによる効果
                me.checked_hasteSkill.forEach(function(haster) {
                    hasterInfo = me.hasteSkillList.find((elem) => elem.haster === haster);
                    atkCooldownBySkill = Math.max(atkCooldownBySkill, hasterInfo.atkCooldown * me.IsTarget(unit, hasterInfo));
                })
                if(atkStartup !== null) {
                    atkCooldown = Math.floor(((atkCooldownBySkill > 0 ? atkCooldownBySkill : atkCooldown) - 1) * (1 - hasteRate / 100) + 1);
                    unit.unitInfo.atkInterval[index0].startup = atkStartup;
                    unit.unitInfo.atkInterval[index0].remain = atkRemain;
                    unit.unitInfo.atkInterval[index0].cooldown = atkCooldown;
                }
                return { startup: atkStartup, remain: atkRemain, cooldown: atkCooldown }
            }
        },
        //HP減少率
        SetHPred() {
            return function(unit) {
                let index = unit.skill.awaken.selected === '通常' ? 0 : 1;
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
                    return unit.skill.HPred[index]
                }
            }
        },
        //イビルプリンセス系クラスの倍率
        EvilPrincessMulti() {
            return function(unit, HP) {
                switch(unit.unitInfo.unitClass.selected) {
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
            let me = this;
            let max = me.unitsList_onSkillAct.length + me.unitsList_onHit.length;
            me.datasets.length = 0;
            me.unitsList_onSkillAct.forEach(function(unit) {
                h = 360 * unit.id / max;
                //グラフデータ作成
                me.datasets.push({
                    label: unit.unitInfo.unitName,
                    data: me.ClacHPchange_onSkillAct(unit),
                    borderColor: 'hsla(' + h + ', 100%, 50%, 0.7)',
                    backgroundColor: 'hsla(' + h + ', 100%, 50%, 0.7)',
                    pointRadius: 0,
                    pointHitRadius: 0.1,
                    hidden: me.graphHidden_onSkillAct
                });
            })
            me.unitsList_onHit.forEach(function(unit) {
                me.SetFirstTime_onHit(unit);
                me.SetInterval_onHit(unit);
                h = 360 * (unit.id + me.unitsList_onSkillAct.length) / max;
                //グラフデータ作成
                me.datasets.push({
                    label: unit.unitInfo.unitName,
                    data: me.ClacHPchange_onHit(unit),
                    borderColor: 'hsla(' + h + ', 100%, 50%, 0.7)',
                    backgroundColor: 'hsla(' + h + ', 100%, 50%, 0.7)',
                    pointRadius: 0,
                    pointHitRadius: 0.1,
                    hidden: me.graphHidden_onHit
                });
            })
        },
        //HP変移計算(スキル発動時発生型)
        ClacHPchange_onSkillAct() {
            return function(unit) {
                let me = this;
                let mul;
                let count = 0;
                let deltaTime = me.timeCap.value / me.plotScaling;
                //let unitName = unit.unitInfo.unitName;
                let AW = unit.skill.awaken.selected;
                let index = AW === '通常' ? 0 : 1;
                let HP = me.maxHP.value;
                let HPchanges = [];
                let damage = me.DPS * deltaTime;
                for(let time = 0; time <= me.timeCap.value; time += deltaTime) {
                    mul = 1.0;
                    //HP減少発生時の処理
                    if(time >= (unit.skill.firstTime + count * unit.skill.interval)) {
                        mul *= me.EvilPrincessMulti(unit, HP / me.maxHP.value * 100);
                        mul *= unit.skill.mulByNum[index][Math.min(count, unit.skill.mulByNum[index].length - 1)];
                        if(unit.skill.dmgMul.opt[index] === 'あり') {
                            HP = Math.floor(HP * (1 - unit.skill.HPred[index] / 100 * unit.skill.dmgMul.mul[index] * mul));
                        } else {
                            HP = Math.floor(HP * (1 - unit.skill.HPred[index] / 100 * mul));
                        }
                        count++;
                    }
                    if(HP < 0) HP = 0;
                    HPchanges.push(HP / me.maxHP.value * 100);
                    HP -= damage;
                }
                return HPchanges.slice()
            }
        },
        //HP変移計算(攻撃ヒット時発生型)
        ClacHPchange_onHit() {
            return function(unit) {
                let me = this;
                let extend = me.SetExtend(unit);
                let dur, mul;
                let isActive = false;
                let count = 0;
                let hit = 0;
                let skillTimeLapse = 0;
                let deltaTime = me.timeCap.value / me.plotScaling;
                //let unitName = unit.unitInfo.unitName;
                let AW = unit.skill.awaken.selected;
                let index = AW === '通常' ? 0 : 1;
                let trigger = unit.skill.trigger[index];
                let HP = me.maxHP.value;
                let HPchanges = [];
                //let atkStartup = unit.unitInfo.atkInterval[0].startup;
                let atkStartupSkill = unit.unitInfo.atkInterval[1].startup;
                //let atkInterval = atkStartup + unit.unitInfo.atkInterval[0].remain + unit.unitInfo.atkInterval[0].cooldown;
                let atkIntervalSkill = atkStartupSkill + unit.unitInfo.atkInterval[1].remain + unit.unitInfo.atkInterval[1].cooldown
                let damage = me.DPS * deltaTime;
                //スキル時間設定
                if(unit.skill.trigger[index] === 'B') {
                    dur = unit.skill.dur.B * (1 + extend);
                } else {
                    dur = unit.skill.dur.A * (1 + extend);
                }
                for(let time = 0; time <= me.timeCap.value; time += deltaTime) {
                    mul = 1.0;
                    if(time >= (unit.skill.firstTime + count * (dur + unit.skill.interval))
                    && time <= (unit.skill.firstTime + dur + count * (unit.skill.interval + dur))) {
                        //スキル中
                        skillTimeLapse += deltaTime;
                        if(!isActive) {     //スキル点火時に一度だけ処理
                            isActive = true;
                            skillTimeLapse = time - (unit.skill.firstTime + count * (dur + unit.skill.interval));
                        }
                        if(trigger !== '非スキル中hit') {
                            //mul *= me.EvilPrincessMulti(unit, HP / me.maxHP.value * 100);
                            mul *= unit.skill.mulByNum[index][Math.min(count, unit.skill.mulByNum[index].length - 1)];
                            //前回プロット時からのヒット数
                            hit = Math.floor((skillTimeLapse * 60 - atkStartupSkill) / atkIntervalSkill + 1)
                                - Math.floor(((skillTimeLapse - deltaTime) * 60 - atkStartupSkill) / atkIntervalSkill + 1);
                            if(unit.skill.dmgMul.opt[index] === 'あり') {
                                HP = Math.floor(HP * (1 - unit.skill.HPred[index] / 100 * unit.skill.dmgMul.mul[index] * mul) ** hit);
                            } else {
                                HP = Math.floor(HP * (1 - unit.skill.HPred[index] / 100 * mul) ** hit);
                            }
                        }
                    } else {
                        //非スキル中
                        if(trigger !== 'スキル中hit') {
                            //非スキル中も割合ダメージを生じるユニット用
                        }
                        if(isActive) {     //スキル終了時に一度だけ処理
                            count++;
                            isActive = false;
                            if(trigger !== '非スキル中hit') {
                                //mul *= me.EvilPrincessMulti(unit, HP / me.maxHP.value * 100);
                                mul *= unit.skill.mulByNum[index][Math.min(count, unit.skill.mulByNum[index].length - 1)];
                                //最小プロット間隔が1/30秒ではない時にはみ出す分の計算
                                hit = Math.floor((dur * 60 - atkStartupSkill) / atkIntervalSkill + 1)
                                    - Math.floor((skillTimeLapse * 60 - atkStartupSkill) / atkIntervalSkill + 1);
                                if(unit.skill.dmgMul.opt[index] === 'あり') {
                                    HP = Math.floor(HP * (1 - unit.skill.HPred[index] / 100 * unit.skill.dmgMul.mul[index] * mul) ** hit);
                                } else {
                                    HP = Math.floor(HP * (1 - unit.skill.HPred[index] / 100 * mul) ** hit);
                                }
                            }
                        }
                    }
                    if(HP < 0) HP = 0;
                    HPchanges.push(HP / me.maxHP.value * 100);
                    HP -= damage;
                }
                return HPchanges.slice()
            }
        }
    },
    methods: {
        //入力制限
        LimitNum(num, min, max, event) {
            let me = this;
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
            let me = this;
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
            let me = this;
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
            let me = this;
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
            let me = this;
            let value = parseFloat(event.target.value);
            if(Number.isNaN(value) || value < 0) {
                value = 0;
            }
            item.mul.splice(index, 1, value);
            me.$forceUpdate();
        },
        //スキル回数倍率制限
        LimitMulByNum(item, index1, index2, event) {
            let me = this;
            let value = parseFloat(event.target.value);
            if(Number.isNaN(value) || value < 0) {
                value = 0;
            }
            item.mulByNum[index1][index2] = value;
            me.$forceUpdate();
        },
        //フレーム数制限
        LimitAtkInterval(item, key, event) {
            let me = this;
            let value = parseInt(event.target.value);
            if(Number.isNaN(value) || value < 1) {
                value = 1;
            }
            item[key] = value;
            me.$forceUpdate();
        },
        //ユニットデータ追加用モーダル(スキル発動時発生型)
        openModal_onSkillAct() {
            let me = this;
            me.newUnitData_onSkillAct = {
                id: null,
                unitInfo: {
                    unitName: '', deployType: '', rarity: '',
                    unitClass: {
                        selectable: false, selected: '',
                        options: [ '' ]
                    },
                    attribution: [ '', '', '' ],
                    affection: { percentage: null, bonus: '', changeRate: null }
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
            me.addUnitAlart = '';
            me.modal_onSkillAct = true;
        },
        //ユニットデータ整形追加(スキル発動時発生型)
        addUnit_onSkillAct() {
            let me = this;
            let alartText = [];
            let fillSkill = [false, false];
            let unitInfo = me.newUnitData_onSkillAct.unitInfo;
            let skill = me.newUnitData_onSkillAct.skill;
            //ユニット名
            if(unitInfo.unitName.length === 0) {
                alartText.push('ユニット名');
            }
            //属性
            if(unitInfo.attribution.filter(Boolean).length === 0) {
                alartText.push('属性');
            }
            //タイプ
            if(unitInfo.deployType === '') {
                alartText.push('タイプ');
            }
            //レアリティ
            if(unitInfo.rarity === '') {
                alartText.push('レアリティ');
            }
            //クラス
            unitInfo.unitClass.options = unitInfo.unitClass.options.filter(Boolean);
            unitInfo.unitClass.selected = unitInfo.unitClass.options[0];
            if(unitInfo.unitClass.options.length === 0) {
                alartText.push('クラス');
                unitInfo.unitClass.options.push('');
            } else if(unitInfo.unitClass.options.length === 1) {
                unitInfo.unitClass.selectable = false;
            } else {
                unitInfo.unitClass.selectable = true;
            }
            //好感度ボーナス
            if(unitInfo.affection.bonus === '') {
                alartText.push('好感度ボーナス')
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
                switch(skill.trans[i]) {
                    case '-':
                        if(skill.CT_uncurr[i].A !== null && skill.dur_uncurr[i].A !== null) {
                            fillSkill[i] = true;
                        }
                        break;
                    case '交互':
                    case '初回A':
                        if(skill.trigger[i] === null) {
                            alartText.push(`${i === 0 ? '通常' : '覚醒'}スキルのHP減少発生`);
                        } else {
                            if(skill.CT_uncurr[i].A !== null && skill.dur_uncurr[i].A !== null
                            && skill.CT_uncurr[i].B !== null && skill.dur_uncurr[i].B !== null) {
                                fillSkill[i] = true;
                            }
                        }
                        break;
                    default:
                }
            }
            if(fillSkill[0] && fillSkill[1]) {
                skill.awaken.selectable = true;
            } else if(fillSkill[0] && !fillSkill[1]) {
                skill.awaken.selectable = false;
                skill.awaken.selected = '通常';
            } else if(!fillSkill[0] && fillSkill[1]) {
                skill.awaken.selectable = false;
                skill.awaken.selected = '覚醒';
            } else {
                alartText.push('通常スキルか覚醒スキルのどちらか');
            }

            if(alartText.length === 0) {
                //必須事項全記入
                //id付与
                me.newUnitData_onSkillAct.id = me.unitsList_onSkillAct[me.unitsList_onSkillAct.length - 1].id + 1;
                //属性詰め
                unitInfo.attribution = unitInfo.attribution.filter(Boolean);
                //スキル整形
                for(let i = 0; i < 2; i++) {
                    switch(skill.trans[i]) {
                        case '-':
                            if(fillSkill[i]) {
                                //Bの情報捨て
                                skill.CT_uncurr[i].B = null;
                                skill.dur_uncurr[i].B = null;
                                skill.trigger[i] = '-';
                            } else {
                                //全部リセット
                                skill.target[i] = null;
                                skill.CT_uncurr[i].A = null;
                                skill.CT_uncurr[i].B = null;
                                skill.dur_uncurr[i].A = null;
                                skill.dur_uncurr[i].B = null;
                                skill.trigger[i] = null;
                                skill.mulByNum[i] = [ 1 ];
                            }
                            break;
                        case '交互':
                        case '初回A':
                            if(!fillSkill[i]) {
                                //全部リセット
                                skill.target[i] = null;
                                skill.CT_uncurr[i].A = null;
                                skill.CT_uncurr[i].B = null;
                                skill.dur_uncurr[i].A = null;
                                skill.dur_uncurr[i].B = null;
                                skill.trigger[i] = null;
                                skill.mulByNum[i] = [ 1 ];
                            }
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
                }
                me.unitsList_onSkillAct.push(me.newUnitData_onSkillAct);
                me.modal_onSkillAct = false;
            } else {
                //記入漏れあり
                me.addUnitAlart = '※以下の事項が記入されてません\n'
                alartText.forEach(function(text, index, array) {
                    me.addUnitAlart += text;
                    if(index < array.length - 1) {
                        me.addUnitAlart += '、';
                    }
                })
            }
        },
        //ユニットデータ追加用モーダル(攻撃ヒット時発生型)
        openModal_onHit() {
            let me = this;
            me.newUnitData_onHit = {
                id: null,
                unitInfo: {
                    unitName: '', deployType: '', rarity: '',
                    unitClass: {
                        selectable: false, selected: '',
                        options: [ '' ]
                    },
                    attribution: [ '', '', '' ],
                    affection: { percentage: null, bonus: '', changeRate: null },
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
            me.addUnitAlart = '';
            me.modal_onHit = true;
        },
        //ユニットデータ整形追加(攻撃ヒット発生型)
        addUnit_onHit() {
            let me = this;
            let alartText = [];
            let fillAtkInterval = false;
            let fillSkill = [false, false];
            let unitInfo = me.newUnitData_onHit.unitInfo;
            let skill = me.newUnitData_onHit.skill;
            //ユニット名
            if(unitInfo.unitName.length === 0) {
                alartText.push('ユニット名');
            }
            //属性
            if(unitInfo.attribution.filter(Boolean).length === 0) {
                alartText.push('属性');
            }
            //タイプ
            if(unitInfo.deployType === '') {
                alartText.push('タイプ');
            }
            //レアリティ
            if(unitInfo.rarity === '') {
                alartText.push('レアリティ');
            }
            //クラス
            unitInfo.unitClass.options = unitInfo.unitClass.options.filter(Boolean);
            unitInfo.unitClass.selected = unitInfo.unitClass.options[0];
            if(unitInfo.unitClass.options.length === 0) {
                alartText.push('クラス');
                unitInfo.unitClass.options.push('');
            } else if(unitInfo.unitClass.options.length === 1) {
                unitInfo.unitClass.selectable = false;
            } else {
                unitInfo.unitClass.selectable = true;
            }
            //好感度ボーナス
            if(unitInfo.affection.bonus === '') {
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
                if(unitInfo.atkInterval_uncurr[i].startup < 2) fillAtkInterval |= true;
                if(unitInfo.atkInterval_uncurr[i].remain < 2) fillAtkInterval |= true;
                if(unitInfo.atkInterval_uncurr[i].cooldown < 2) fillAtkInterval |= true;
            }
            fillAtkInterval = !fillAtkInterval;
            if(!fillAtkInterval) {
                alartText.push('攻撃間隔のどれか');
            }
            //スキル情報
            for(let i = 0; i < 2; i++) {
                switch(skill.trans[i]) {
                    case '-':
                        if(skill.CT_uncurr[i].A !== null && skill.dur_uncurr[i].A !== null) {
                            fillSkill[i] = true;
                        }
                        break;
                    case '交互':
                    case '初回A':
                        if(skill.trigger[i] === null) {
                            alartText.push(`${i === 0 ? '通常' : '覚醒'}スキルのHP減少発生`);
                        } else {
                            if(skill.CT_uncurr[i].A !== null && skill.dur_uncurr[i].A !== null
                            && skill.CT_uncurr[i].B !== null && skill.dur_uncurr[i].B !== null) {
                                fillSkill[i] = true;
                            }
                        }
                        break;
                    default:
                }
            }
            if(fillSkill[0] && fillSkill[1]) {
                skill.awaken.selectable = true;
            } else if(fillSkill[0] && !fillSkill[1]) {
                skill.awaken.selectable = false;
                skill.awaken.selected = '通常';
            } else if(!fillSkill[0] && fillSkill[1]) {
                skill.awaken.selectable = false;
                skill.awaken.selected = '覚醒';
            } else {
                alartText.push('通常スキルか覚醒スキルのどちらか');
            }

            if(alartText.length === 0) {
                //必須事項全記入
                //id付与
                me.newUnitData_onHit.id = me.unitsList_onHit[me.unitsList_onHit.length - 1].id + 1;
                //属性詰め
                unitInfo.attribution = unitInfo.attribution.filter(Boolean);
                //スキル整形
                for(let i = 0; i < 2; i++) {
                    switch(skill.trans[i]) {
                        case '-':
                            if(fillSkill[i]) {
                                //Bの情報捨て
                                skill.CT_uncurr[i].B = null;
                                skill.dur_uncurr[i].B = null;
                                skill.trigger[i] = 'スキル中hit';
                            } else {
                                //全部リセット
                                skill.target[i] = null;
                                skill.CT_uncurr[i].A = null;
                                skill.CT_uncurr[i].B = null;
                                skill.dur_uncurr[i].A = null;
                                skill.dur_uncurr[i].B = null;
                                skill.trigger[i] = null;
                                skill.mulByNum[i] = [ 1 ];
                            }
                            break;
                        case '交互':
                        case '初回A':
                            if(!fillSkill[i]) {
                                //全部リセット
                                skill.target[i] = null;
                                skill.CT_uncurr[i].A = null;
                                skill.CT_uncurr[i].B = null;
                                skill.dur_uncurr[i].A = null;
                                skill.dur_uncurr[i].B = null;
                                skill.trigger[i] = null;
                                skill.mulByNum[i] = [ 1 ];
                            }
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
                }
                me.unitsList_onHit.push(me.newUnitData_onHit);
                me.modal_onHit = false;
            } else {
                //記入漏れあり
                me.addUnitAlart = '※以下の事項が記入されてません\n'
                alartText.forEach(function(text, index, array) {
                    me.addUnitAlart += text;
                    if(index < array.length - 1) {
                        me.addUnitAlart += '、';
                    }
                })
            }

            //me.modal_onHit = false;
        },
        //グラフ作成
        Chart() {
            let me = this;
            //プロット間隔
            me.plotScaling = Math.min(me.timeCap.value * 30, Math.floor(window.innerWidth / 100) * 300);
            //グラフデータ作成
            me.SetGraphData;
            //グラフの枠線の色
            let xAxisColor = [];
            let yAxisColor = [];
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
            //ツールチップの位置を左下に固定
            Chart.Tooltip.positioners.custom = function(elements, position) {
                if (!elements.length) {
                    return false;
                }
                const area = elements[0]._chart.chartArea;
                return {
                    x: 200,
                    y: area.bottom
                };
            };
            //グラフ作成
            var ctx = document.getElementById('charts').getContext('2d');
            me.canvas = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [...Array(me.plotScaling + 1)].map((_, i) => i * me.timeCap.value / me.plotScaling),
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
                                var tooltipLabel = [];
                                var added = [];
                                if(added.indexOf(data.datasets[tooltipItem.datasetIndex].label) === -1) {
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
                    var ctx = c.chart.ctx;
                    ctx.fillStyle = 'white';
                    ctx.fillRect(0, 0, c.chart.width, c.chart.height);
                }
            });
        }
    }
});
