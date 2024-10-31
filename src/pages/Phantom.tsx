import { useState } from 'react';
import StartMenu from '~/components/StartMenu';
import TextBlock from '~/components/TextBlock';
import AudioController from '~/components/AudioController';
import { useAssetLoader } from '~/hooks/useAssetLoader';
import Background from '~/components/Background';

const Phantom = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [assets, setAssets] = useState<{
    bgm: string;
    se: string;
    bg: string;
  }>({
    bgm: '',
    se: '',
    bg: '',
  });

  const setBgm = (newBgm: string) => {
    setAssets((prevAssets) => ({
      ...prevAssets,
      bgm: newBgm,
    }));
  };

  const setSe = (newSe: string) => {
    setAssets((prevAssets) => ({
      ...prevAssets,
      se: newSe,
    }));
  };

  const setBg = (newBg: string) => {
    setAssets((prevAssets) => ({
      ...prevAssets,
      bg: newBg,
    }));
  };
  const { fileUrl: bgmSrc } = useAssetLoader(assets.bgm, 'music', '/phantom.dat');
  const { fileUrl: seSrc } = useAssetLoader(assets.se, 'music', '/phantom.dat');
  const { fileUrl: bgSrc } = useAssetLoader(assets.bg, 'images', '/phantom.dat');

  const { fileUrl: fgChakusin } = useAssetLoader('chakusin', 'images', '/phantom.dat');
  const { fileUrl: fgBreak } = useAssetLoader('break', 'images', '/phantom.dat');

  document.title = 'Phantom Girl';

  const handleChakusin = () => {
    const imgEl = document.getElementById('chakusin');
    if (imgEl) {
      imgEl.style.display = 'block';
      setTimeout(() => {
        imgEl.style.display = 'none';
      }, 3000);
      setSe('phone');
      window.navigator.vibrate([900, 100, 900, 100, 900, 100]);
    }
  };

  const handleBreak = (broken: boolean) => {
    const imgEl = document.getElementById('break');
    if (imgEl) {
      imgEl.style.display = broken ? 'none' : 'block';
      if (!broken) setSe('ガラスにひびが入る');
      else setSe('ガラスが割れる1');
    }
  };

  return (
    <>
      <AudioController bgm={assets.bgm == '' ? '' : bgmSrc || ''} se={assets.se == '' ? '' : seSrc || ''} />
      <Background background={assets.bg === '' ? assets.bg : bgSrc || ''} />
      <img
        src={fgChakusin || ''}
        id="chakusin"
        className="fixed m-auto z-50 top-0 left-0 right-0 w-full bg-center bg-contain bg-no-repeat"
        style={{ display: 'none' }}
      ></img>
      <img
        src={fgBreak || ''}
        id="break"
        className="fixed m-auto z-50 top-0 left-0 right-0 w-full bg-center bg-contain bg-no-repeat"
        style={{ display: 'none' }}
      ></img>
      <TextBlock>
        <StartMenu
          show={showMenu}
          setShow={setShowMenu}
          title={
            <>
              Phantom <span className="text-rose-700">Girl</span>
            </>
          }
        >
          この物語は、私のもとに送られてきた古い手帳の内容に基づいています。
          私もどこまでが事実なのかはかりかねますので、 フィクションだと思ってお楽しみください。
          公共の場で閲覧する際は周囲の人の迷惑にならないよう、 イヤホンをつけてお楽しみください。
          最後に、人前で叫んで恥をかいたとしても、私は一切の責任を負いません。
        </StartMenu>
      </TextBlock>

      {!showMenu && (
        <div>
          <TextBlock
            className="mt-32 pb-40"
            freeze
            onload={() => {
              setBgm('sixth');
            }}
          >
            <p>
              <span className="text-2xl font-tegomin text-red-700">
                ナン…デ…コロ…シタノ…
                <br />
                <br />
                ネエ…オシエ…テヨ…
              </span>
            </p>
          </TextBlock>

          <TextBlock className="mt-20 pb-40">
            <p>
              「来るな！俺は知らない！」
              <br />
              「そ、そうよ！アンタを殺したのは私じゃない！」
              <br />
              「俺たちは…そう、肝試しだ！こいつに誘われて…」
              <br />
              「はぁ？！この場所にしようって言ったのはアンタでしょ？！」
              <br />
              「違う、俺は悪くない！全部お前のせいだ…」
            </p>
          </TextBlock>

          <TextBlock className="mt-20 pb-40" freeze>
            <p>
              <span className="text-3xl font-tegomin text-red-700">
                イノチ…カラダ…
                <br />
                <br />
                カエ…セ… <br />
                <span className="text-[150%] font-tegomin text-red-700">カエセエェェェェェェ！</span>
              </span>
            </p>
          </TextBlock>

          <TextBlock className="mt-20 pb-40">
            「だ、から…俺は知らない！
            <br />
            俺は悪くない！ <br />
            俺はあぁっ… <br />
            <span className="font-tegomin text-red-700">うわあああああぁぁぁァァァ！！！」</span>
          </TextBlock>

          <hr />

          <TextBlock
            className="mt-20 pb-20"
            onload={() => {
              setBgm('second');
              setBg('seen1');
            }}
          >
            <p>
              いつも疑問に思っていたことがある。
              <br />
              何故、ホラーゲームの主人公は自ら
              <br />
              危ない場所に行こうとするのだろうか？
              <br />
              「きゃあああああ！」 <br />
              「ちょ、おい、しがみつくなよ…
              <br />
              もげる、腕、腕！！」
              <br />
              <br />
              …そして何故、この女は当然のような顔で
              <br />
              俺の部屋でホラーゲームをしているのか？
              <br />
            </p>
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            <p>
              「何よ、腕の一本くらいいいでしょ？
              <br />
              こっちは悪霊に殺されかけてるのよ？」
              <br />
              「いや、現実とフィクションが混ざってるぞ」
              <br />
              「折角ゲームに没頭してるとこなのに…
              <br />
              ほんと啓は無神経よね。妹さん苦労しそう」
              <br />
              <br />
              きっかけは彼女― <br />
              鷹野涼が転校してきた初日のことだ。
              <br />
              似たような趣味や彼女自身の社交性もあり、
              <br />
              俺たちはあっという間に意気投合した。
              <br />
              それから一年、鷹野はたまに俺の部屋に現れ
              <br />
              ゲームをしていくようになっている。
            </p>
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            <p>
              「樹は関係ないだろう。というか、
              <br />
              まだ会ったこともないじゃないか」
              <br />
              「そうね、だからそろそろ会いたいなー…ダメ？」
              <br />
              「ダメも何も、前にも言ったろ？
              <br />
              絶望的に予定が噛み合ってないみたいだって」
              <br />
              樹は中学に入りたてにして、既に部活はもちろん習い事だのボランティアだのに打ち込んでいて非常に忙しい。
              <br />
              友人らと協力し、色々なことをするその姿はまさに青春だ。
            </p>
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            <p>
              「そんなんだから、お前には会えないと思う」
              <br />
              「そっか、残念ね。一緒に行ってみたい場所があったんだけど」
              <br />
              「へえ、カフェか何かか？」
              <br />
              会う前から遊びに行く計画とは、なかなか気が早いものだ。
              <br />
              「ううん、廃屋」
              <br />
              <br />
              …本当に、どうして自ら危ない場所に行こうとするんだ？
            </p>
          </TextBlock>

          <hr />

          <TextBlock
            className="mt-20 pb-20"
            onload={() => {
              setBgm('forth');
              setBg('');
            }}
          >
            <p>
              「…着いた。ここがその廃屋よ」
              <br />
              「おかしいな、俺の目には
              <br />
              サビれたアパートが見えるんだが」
              <br />
              「じゃ、まだ眼科には行かなくていいみたいね」
              <br />
              結局、「廃屋」には樹を抜いた二人で来ることになった。いや、そもそも樹が来るような話し方をしていた鷹野がおかしいのだが。
              <br />
              「…まあいいや。それで一体、こんなところに何しに来たんだ？」
              <br />
              「ふふ、よくぞ聞いてくれた。
              <br />
              その理由はもちろん―」
              <br />
              「先に言っておくが、ただの肝試しなんてくだらない理由じゃないよな？」
              <br />
              「…ﾁｶﾞｳﾖ？」
              <br />
              「じゃあなんで片言なんだよ。あれか、馬鹿なホラゲの主人公に感化でもされたのか？」
              <br />
              「それこそまさかよ。あんだけボロクソ言ってるのを聞いてるのにそんなことするわけないでしょ」
              <br />
              するわけありそうな人が何か言っている。
            </p>
          </TextBlock>

          <TextBlock className="mt-20 pb-40">
            <p>
              「ここに来た理由はね…ちょっとした捜し物。正確には探し猫、とでもいうのかな」
              <br />
              「…成程、あのチラシか」
              <br />
              最近、地域の電柱やらスーパーやらで見かけるチラシやビラがある。よくある「飼い猫を探しています」というやつだ。
              <br />
              聞けば鷹野はその猫とかなり仲良くやっていたという。
              <br />
              「近所によくいたから見かける度に撫でたりしてたんだけど…ちょっと前にこの廃屋で見かけた気がするのよ」
              <br />
              「へぇ。で、このサビれたアパートに来たと。俺と樹を呼んだのは…単純に人手か？」
              <br />
              「あー、まあそれもあるにはあるんだけど…その…」
              <br />
              どうにも歯切れが悪い。「あー」と「えー」を数回繰り返して、意を決したかのように彼女は言った。
              <br />
              「…出るらしいんだよね、ここ」
            </p>
          </TextBlock>

          <br />

          <TextBlock className="mt-20 pb-20">
            <p>
              俺は一瞬固まったが、すぐに思考を取り戻した。
              <br />
              「つまり何だ、俺はお前に腕をもぎ取られるために呼ばれたってことか？肩をティッシュ代わりに泣かれるほうがまだ良さそうだ」
              <br />「
              <ruby>
                お悩み相談
                <rp>（</rp>
                <rt>shoulder to cry on</rt>
                <rp>）</rp>
              </ruby>
              って意味ではそっちになるから安心して。頼りにしてるよ？」
              <br />
              「こういうときだけ調子いいんだからな…」
              <br />
              「まあまあ。昼にも普通に出るって聞いて…流石に一人じゃ行く勇気が出なくてさ」
              <br />
              何でも、数ヶ月ほど前に起こった例の虐待殺人の被害者が強い地縛霊と化して彷徨っているらしい。
              <br />
              「ごめん、ここまで黙ってて…手伝ってくれない？」
              <br />
              ここまで来てはいさようならと帰る人間がいるのだろうか？選択肢があるように見えて一つしかない問いにうなずき、俺たちは廃墟に足を踏み入れた。
            </p>
          </TextBlock>

          <hr />

          <TextBlock
            className="mt-20 pb-20"
            onload={() => {
              setBg('seen2');
            }}
          >
            <p>
              「ところで、今更だけどこれは不法侵入になるんじゃないのか？」
              <br />
              庭を探し終え、部屋をいくつか調べたところでふと思う。
              <br />
              「…ま、まあ、バレなきゃ犯罪じゃないから…」
              <br />
              「…はぁ、さっさと探そう」
              <br />
              彼女の計画性には期待するだけ無駄だ。
              <br />
              「そうね。私は奥の部屋から見てくる。啓は手前の寝室をお願いできる？」
              <br />
              「わかった。気をつけろよ」
              <br />
              遠ざかる足音をしり目に、俺は寝室の部屋の扉を後ろ手に閉じた。
            </p>
          </TextBlock>

          <TextBlock
            className="mt-20 pb-20"
            onload={() => {
              setSe('close');
            }}
          >
            <p>
              そして部屋を一瞥して、俺は戦慄した。一層荒れた家具。ぼろぼろの人形。焦げた跡は煙草だろうか？そしてなにより、血痕。
              <br />
              間違いない。あの忌まわしき事件が起こったのは、まさにこの場所だ。
              <br />
              「俺がこっちで、本当によかったよ」
              <br />
              なんだかんだ言って鷹野は優しい。ここまで凄惨な光景を見て受けるショックは尋常ではないはずだ。
              <br />
              「さて、探してみるか？…この部屋にいるとは思えないけど」
              <br />
              窓には格子がはまっており、人間はおろか猫も出入りできるようには見えない。
              <br />
              そこまで考え、格子の用途に想像を巡らせようとしたとき、ふと目に入るものがあった。
              <br />
              「…日記？」
            </p>
          </TextBlock>

          <TextBlock className="mt-20 pb-20">
            <p>
              そう、それは日記だった。
              <br />
              部屋の隅に埃を被って打ち棄てられていたそれを手に取る。
              <br />
              カギは壊れている。
              <br />
              めきめきと音がしそうな表紙を開き、俺は引き寄せられるかのようにページをめくっていた。
            </p>
          </TextBlock>

          <hr />

          <TextBlock
            className="mt-20 pb-20"
            onload={() => {
              setBg('');
            }}
          >
            <p>
              二月四日
              <br />
              <br />
              父さんがまた私を殴る。酔っぱらっているくせに
              <br />
              見えないようにする「気遣い」は忘れない。
              <br />
              父さんの標的が私であるうちに、メイを逃がそう。
            </p>
          </TextBlock>

          <TextBlock className="mt-20 pb-20">
            <p>
              二月二十四日
              <br />
              <br />
              今日、父さんが急に部屋に入ってきて
              <br />
              いろいろな場所を漁っていった。
              <br />
              幸い、この日記は見つからなかった。でも、隠していた
              <br />
              お菓子は持ってかれてしまった。逃亡資金も一緒。
              <br />
              これでまた振り出しに戻ってしまった。
            </p>
          </TextBlock>

          <TextBlock className="mt-20 pb-20">
            <p>
              三月九日
              <br />
              <br />
              帰ってきたらメイが殴られていた。
              <br />
              咄嗟にかばおうとして機嫌を損ねたみたい。
              <br />
              体中殴られて、煙草で焼かれて、裸でベランダに転がされた。
              <br />
              決めた。明日決行しよう。
            </p>
          </TextBlock>

          <hr />

          <TextBlock className="mt-20 pb-20">
            <p>
              それ以降は白いページが続いていた。
              <br />
              それもそのはず、事件が起こったのは三月十日。
              名前は伏せられていたものの、父親と長女が差し違えて二人とも死亡、次女だけが生き残ったと聞いた。
              つまり、この日記の主は、この翌日に…。
              <br />
              誰も幸せにならない想像はよそう。そう思って日記を閉じる。
              <br />
              その時、一枚の写真がはらりと落ちた。
              <br />
              「これは…家族写真か？」
              <br />
              恐らくDVが始まる前のものだろう。両親に挟まれ、二人の幼い少女が笑っている。
              母親に何があったのかは知らないが、父親がDVしていた際に母親の姿はなかったはずだ。原因はそれか？
              <br />
              ふと、写真を眺めていると妙な既視感を感じる。まるで、知り合いのアルバムを見ているような懐かしさだ。
              <br />
              「…何だ？」 <br />
              そうつぶやいたときだった。
            </p>
          </TextBlock>

          <TextBlock onload={() => setSe('himei_kyaa_reverb')} className="pt-80"></TextBlock>

          <TextBlock className="mt-20 pb-56">
            <p>「鷹野？！」 悲鳴を聞いて大急ぎで部屋を出る。</p>
          </TextBlock>
          <TextBlock className="mt-20 pb-40">
            <p>しかし、そこには誰もいなかった。</p>
          </TextBlock>
          <TextBlock
            className="mt-20 pb-96"
            onload={() => {
              setBgm('');
            }}
          >
            <p>
              「鷹野？」
              <br />
              呼びかけるが、返事はない。その時、ふと俺は気づいた。
              <br />
              <br />
              床に、埃が積もったままなのだ。 <br />
              「どういうことだ？」
              <br />
              扉が閉じられていたことを思い出す。確かに俺は扉を閉じて探索したが、鷹野は心霊系を苦手としていたはずだ。
              そんな人間が、わざわざ密室を作るか？いや、埃が積もっているということは…そもそも、この部屋に入っていないのではないか。
              <br />
              「いや、まさか」
              <br />
              奥の部屋といえば、この和室とそこへの通路のようになっている居間しかない。居間にいない以上、ここにいるとしか考えられないのだ。
              <br />
              「本当に、どういうことだ？」 <br />
              その時だった。
            </p>
          </TextBlock>

          <TextBlock
            freeze
            className="pb-32"
            onload={() => {
              handleChakusin();
            }}
          ></TextBlock>

          <TextBlock
            className="mt-20 pb-20"
            onload={() => {
              setBgm('7buuu');
            }}
          >
            <p>
              「誰だ、こんな時に…」
              <br />
              少しムッとしながらも電話に出る。雑音が酷い。 <br />
              <span
                style={{
                  fontSize: '50%',
                  fontFamily: 'New Tegomin',
                  color: 'red',
                }}
              >
                「……げ……やく…」
              </span>
              <br />
              何か言っているようだが全く聞き取れない。
              <br />
              「何だ？今忙しいんだよ」 <br />
              <span
                style={{
                  fontSize: '50%',
                  fontFamily: 'New Tegomin',
                  color: 'red',
                }}
              >
                「…げて…すぐ…げ…」
              </span>
              <br />
              「言いたいことがあるならはっきり言ってくれ。そもそも、アンタ誰だ？」
            </p>
          </TextBlock>

          <TextBlock
            className="mt-20 pb-56"
            freeze
            onload={() => {
              setSe('yurusanai');
            }}
          >
            <p>
              <span
                style={{
                  fontSize: '50%',
                  fontFamily: 'New Tegomin',
                  color: 'red',
                }}
              >
                「…げて…そこか
              </span>
              <span
                style={{
                  fontSize: '150%',
                  fontFamily: 'New Tegomin',
                  color: 'red',
                }}
              >
                ……逃げて！」
              </span>
            </p>
          </TextBlock>

          <TextBlock className="mt-20 pb-20">
            <p>
              スマホが叫ぶのと背後で声が聞こえるのとはほぼ同時だった。
              <br />
              俺は大急ぎで部屋を出、玄関のドアノブに手をかける。が、
              <br />
              「開かない…！」
              <br />
              逃げ出そうとする俺をあざ笑うかのように声が近づいてくる。
              <br />
              <span
                style={{
                  fontSize: '150%',
                  fontFamily: 'New Tegomin',
                  color: 'red',
                }}
              >
                「ユルサナイ… <br />
                イウコト…キケ…
                <br />
                ニゲルナアアァァァァァァ！」
              </span>
            </p>
          </TextBlock>

          <TextBlock
            className="mt-20 pb-20"
            onload={() => {
              setSe('nigasanai');
            }}
          >
            <p>
              「…ち、知るかよ、このクソ野郎！」
              <br />
              この霊は恐らく、父親の方だろう。死してなお子供を支配したがるとは、生前はどれほど恐ろしい存在だったか見て取れる。
              <br />
              例の寝室に入り、格子を無理やり引き抜く。安っぽい木製で、腐りかけているその格子はあっさりと自分の役目を手放す。
              <br />
              <span
                style={{
                  fontSize: '150%',
                  fontFamily: 'New Tegomin',
                  color: 'red',
                }}
              >
                「アケロオオオォォォォォ！」
              </span>
              <br />
              「っち、少し黙ってろクズ親父が」
            </p>
          </TextBlock>

          <TextBlock
            className="mt-20 pb-20"
            onload={() => {
              handleBreak(false);
            }}
          >
            腕にジャケットを巻き付け、
            <br />
            窓を思い切り殴りつける。 <br />
            ひびが入る。
            <br />
            「この…くそ、割れろっ！」
            <br />
            声が近づいてくる。時間がない。
            <br />
            「割れろ…さっさとぶっ壊れろよ！」
          </TextBlock>

          <TextBlock
            className="mt-20 pb-20"
            onload={() => {
              handleBreak(true);
            }}
          >
            遂に割れる。
            <br />
            破片のことなど気にせず、俺は外に転がり出る。
            <br />
            男が何か後ろで叫んでいた気もするが、あまり覚えていない。
            <br />
            外に出て、敷地を出て、ようやく俺はアパートを振り返る。
            <br />
            と、その時ふと気づいた。
            <br />
            <br />
            「外にも鷹野はいない？」
          </TextBlock>

          <hr />

          <TextBlock
            className="mt-20 pb-20"
            onload={() => {
              setBgm('second');
            }}
          >
            <p>
              結局、俺は自分での捜索を諦め警察の手を借りることにした。
              <br />
              「しかしね、南條君。いくら猫を探すためとはいえ、廃墟に侵入するのはよくないな」
              <br />
              「すみません」
              <br />
              「まあ悪気はないみたいだし、今回は不問にしておくけど…次はないからね？」
              <br />
              「はい、ありがとうございます」
              <br />
              そんな感じに、俺は到着した警察と話をする。少しするとアパートに向かっていたもう一人のほうが現れ、刑事に耳打ちしている。
              <br />
              「…そうか。お前はもう戻っていいぞ」
              <br />
              そういうと、刑事は再び俺のほうに向きなおった。
              <br />
              「どうやら、あの部屋には少女はいなかったようだ。無論他の部屋にも」
              <br />
              「そう、ですか」
              <br />
              失意に沈む俺を慰めるように、その刑事は言った。
              <br />
              「我々が必ず見つける。その子の名前を教えてくれないか」
              <br />
              藁にも縋る思いで―というと失礼だが、俺はそれくらい警察に期待していた。
              <br />
              「涼。鷹野涼です」
            </p>
          </TextBlock>

          <br />
          <br />

          <TextBlock className="mt-200 pb-96">
            <p>
              その瞬間、刑事の顔が凍り付いた。
              <br />
              「…もう一度、言ってくれるかな」
              <br />
              「鷹野涼です。肩にかかるくらいの黒髪で、銀フレームの眼鏡をしてる―」
              <br />
              「間違い、ないのか？」
              <br />
              「間違えるはずもありません」
              <br />
              当てにしていた警察の反応がこれで、少しいらだっていたかもしれない。彼女の、鷹野涼の特徴を事細かに伝えようとしたとき、刑事が再び口を開いた。
            </p>
          </TextBlock>

          <TextBlock
            className="pt-20 pb-96"
            freeze
            onload={() => {
              setBgm('');
            }}
          >
            <br />
            <br />
            <br />
            <span
              style={{
                fontSize: '150%',
                fontFamily: 'New Tegomin',
                color: 'red',
              }}
            >
              「鷹野涼は、数ヶ月前ここで亡くなっているぞ？」
            </span>
          </TextBlock>
          <TextBlock
            freeze
            className="pb-32"
            onload={() => {
              handleChakusin();
              setTimeout(() => {
                window.location.pathname = '';
              }, 3000);
            }}
          ></TextBlock>
        </div>
      )}
    </>
  );
};

export default Phantom;
