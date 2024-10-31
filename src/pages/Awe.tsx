import { useState } from 'react';
import StartMenu from '~/components/StartMenu';
import TextBlock from '~/components/TextBlock';
import AudioController from '~/components/AudioController';
import { useAssetLoader } from '~/hooks/useAssetLoader';
import Background from '~/components/Background';
import Notification from '~/components/Notification';

const Awe = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const assets = useState<{
    bgm: string;
    se: string;
    bg: string;
  }>({
    bgm: '',
    se: '',
    bg: '',
  })[0];

  // const setBgm = (newBgm: string) => {
  //   setAssets((prevAssets) => ({
  //     ...prevAssets,
  //     bgm: newBgm,
  //   }));
  // };

  // const setSe = (newSe: string) => {
  //   setAssets((prevAssets) => ({
  //     ...prevAssets,
  //     se: newSe,
  //   }));
  // };

  // const setBg = (newBg: string) => {
  //   setAssets((prevAssets) => ({
  //     ...prevAssets,
  //     bg: newBg,
  //   }));
  // };
  const { fileUrl: bgmSrc } = useAssetLoader(assets.bgm, 'music', '/phantom.dat');
  const { fileUrl: seSrc } = useAssetLoader(assets.se, 'music', '/phantom.dat');
  const { fileUrl: bgSrc } = useAssetLoader(assets.bg, 'images', '/phantom.dat');

  document.title = 'Awe';

  return (
    <>
      <AudioController bgm={assets.bgm == '' ? '' : bgmSrc || ''} se={assets.se == '' ? '' : seSrc || ''} />
      <Background background={assets.bg === '' ? assets.bg : bgSrc || ''} />
      <TextBlock>
        <StartMenu
          show={showMenu}
          setShow={setShowMenu}
          title={
            <>
              <span className="text-rose-700">Awe</span>
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
          <Notification message="17:00 水掫村 キャンプ場" />
          <TextBlock className="mt-20 pb-20">
            「食材、持ってきましたよ」
            <br />
            「おー、ありがと。すぐ使うからその辺置いといて」
            <br />
            村で採れた野菜を仮設の料理台の上に置き、少し伸びをする。高校の創立記念日と休日がいい感じに噛み合って生まれた連休、私は友人に連れられキャンプに来ていた。
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            <br />
            「そうそう、うちの妹はどうした？てっきり東さんと一緒かと思ったんだけど」
            <br />
            「樹だったら村のお年寄りに気に入られて、公民館で遊んでますよ。すぐ来るって言ってましたけど、あの分なら向こう1時間は戻らないでしょうね」
            <br />
            「あー…すごい想像できるわ。お手玉でも教わってるんだろうね、きっと」
            <br />
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            南條兄妹はハイスペックである。
            <br />
            妹の樹はとにかく人当たりが良く、初対面だろうが平然と懐に潜り込んで仲良くなってしまう。しかも本人は無自覚だというのだから恐ろしい。
            <br />
            悪人に騙されそうで心配になってくるが、本人曰く「大丈夫だいじょーぶ、騙されてもどうにかなるから！」だそうだ。
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            恐らく、それをどうにかしているのは彼女自身ではなく兄・南條啓だろう。
            <br />
            大学では物理学を専攻しつつもフリーランスのITエンジニアとして活動し、挙句投資でとんでもない額を稼ぐという傑物である。
            <br />
            あまり会話したことは無かったのだが、中学生時代に学校の近くで見かけたことがあった。
            <br />
            …樹を弄んだ男と接触していたのだ。その男は間もなく転校していったので、啓が脅すかなにかしたのだろうと私は想像している。
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            「まあ、それならそれで仕方ないな。ご飯の支度はもう少し後にするか」
            <br />
            「あれ、仕込みとかもしなくていいんですか？」
            <br />
            「んー、今すぐじゃなくていいな。正直、まだあんまりお腹減ってないし。それよりも、この辺を散歩したい」
            <br />
            そう言うと啓は銀杏の林に歩いていく。見事な黄金が一面に広がる林だ。
            <br />
            「散歩、ですか。確かにかなりアリですけど」
            <br />
            私はそんな啓を眺めながら告げる。
          </TextBlock>
          <TextBlock className="mt-20 pb-56">
            「その林、びっくりするほど臭いですよ」
            <br />
            <br /> …すごい顔をしながら踵を返してきた。手遅れだったようだ。
          </TextBlock>
          <hr />
          <Notification message="19:00 比良川 河川敷" />
          <TextBlock className="mt-20 pb-20">
            「…でねー、お医者さん彫刻すっごい上手くてさー、びっくりしちゃった」
            <br />
            <br />
            キャンプ場に隣接した河川敷でカレーを頬張りながら、樹の話は止まらない。
            <br />
            1時間半も何をしていたのかと思えば、老人会とゲートボールし、
            <br />
            あんみつを食べ、何故か彫刻体験までしてきていたらしい。
            <br />
            <br />
            「ほらこれこれ、村のお地蔵様なんだってさ。かわいいでしょー」
            <br />
            「へえ、こりゃ水子地蔵じゃないか。そういやさっきもその辺で見かけたなぁ…この村となんか関係があるのか？」
            <br />
            「さあ？みんなお地蔵様としか言ってなかったけどな…」
            <br />
            <br />
            啓がしれっと博識なところを見せるが、樹はどうもピンと来ていないらしい。
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            「水子地蔵って、早死した子供を守ってるって人ですよね？」
            <br />
            「そうだね、賽の河原で鬼に虐められる子供を救ったという逸話がある。流産した子供を供養してるとも言うし、元々そういう話が多い地域だったのかも」
            <br />
            <br />
            1人納得した様子の啓とは裏腹に、樹はこんなことを言い出した。
            <br />
            <br />
            「護ってるって感じじゃなかったけどなー。どっちかっていうと畏れている感じ？お地蔵様が祟りに来るぞーとか言ってた」
            <br />
            「うーん、そういうのは仏より神の領分だけどなぁ。どっかで神仏習合したか、それとも…」
          </TextBlock>
          <TextBlock className="mt-20 pb-56">
            啓は再び思索に耽り出してしまう。
            <br />
            そんな兄を後目に、樹はカレーの残りを平らげるとこっちに向き直った。
            <br />
            <br />
            「ごめんねー、うちの兄こんなんで…ねね、後で流れ星見ようよ、流れ星！あっちの丘で見れるんだって！」
            <br />
            <br />
            そういえばニュースで流星群がどうとか言っていた気がする。
            <br />
            <br />
            「星？別にいいけど…真夜中まで起きてられるの？」
            <br />
            「だいじょーぶ、どうにか粘るから！」
          </TextBlock>
          <hr />
          <Notification message="1:00 水掫村 畦道" />
          <TextBlock className="mt-20 pb-20">
            「ちょっと横になってるから起こしてー」
            <br />
            と言って寝た樹は、案の定何度揺すっても起きてこなかった。
            <br />
            むにゃむにゃ言っている友人は兄上に丸投げし、
            <br />
            私はのんびり夜道を歩いている。
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            「本当、空気が澄んでるのね…」
            <br />
            <br />
            ふと上を向き、都会とは段違いの星の量に圧倒される。
            <br />
            明るい星が少ない秋の夜空だが、それでもここで見ると満天の星と形容するに相応しい。
            <br />
            <br />
            「…あ、流れ星」
            <br />
            <br />
            もう流星群が見え始めているのだろうか。丘へ向かう足を少し早めたその時、
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            「…っとと…」
            <br />
            <br />
            何かに躓いたようだ。脛をしこたまぶつけ、しばし悶絶する。
            <br />
            大きな石か何かだろうか？
            <br />
            まだ残る足の痛みから無理矢理目を背けながらその何かを見て、
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            「…え？」
            <br />
            <br />
            それが何かを理解するのに数秒を要し、そして私は戦慄した。
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            地蔵だ。横倒しになった水子地蔵。
            <br />
            大きさは全長70cmほど。
            <br />
            小さな祠のようなものから、
            <br />
            まるで突っ伏すように倒れている。
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            「どうして、倒れて…」
            <br />
            <br />
            動悸を抑えつつ、ひとまず地蔵を元の位置に戻そうと手を伸ばす。
            <br />
            妙にのっぺりとした顔だ。
            <br />
            そして、いやに軽い気がする。
            <br />
            地蔵などというものを持ったことは当然ないのだけど、それでも石でできたものはもっと重くて然るべきではないか？
            <br />
            そんなことを考えていた時だった。
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            「っ…たぁ…」
            <br />
            <br />
            初めは何か礫のようなものが飛んできた痛み。
            <br />
            そしてすぐに、饐えた匂いが鼻腔に広がる。
            <br />
            同時に、肌に何かが粘りつく感覚。
          </TextBlock>
          <TextBlock className="mt-20 pb-20">恐る恐る目を開ける。</TextBlock>
          <TextBlock className="mt-20 pb-20">
            「…ぇ…ひ…」
            <br />
            <br />
            先程まで腕の中にあった地蔵は砕け散っていた。
            <br />
            代わりにそこにあったのは、
            <br />
            悪臭を放つ、
            <br />
            見るもおぞましいぐちゃぐちゃの物体…
            <br />
            腐りかけの肉塊と思しきものだった。
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            思考が全くまとまらない。
            <br />
            これは何？一体何の…それとも、誰の？
            <br />
            そもそも何でこんな所に？まさか、地蔵の中にあったとでも言うの？
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            動悸は早まり、呼吸が乱れる。
            <br />
            全身の細胞がここにいてはダメだと告げている。
            <br />
            とにかくこの場を離れようと立ち上がりかけた時、
            <br />
            私はようやく腰が抜けていたことに気づいた。
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            「…は…はは…」 乾いた笑いが零れ出る。万事休すだ。最早恐怖は麻痺しようとしていた。
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            ふと、樹の話を思い出す。 『お地蔵様が祟りに来るぞーって言ってた』
            今や遠い過去のように思えるその会話は、しかしリアルな実感を伴って私にのしかかる。
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            いつまでそうしていたのだろうか。少し遠くに懐中電灯の光が見える。 とにかくこの場を離れなければ。
            足の震えを抑え込んでなんとか立ち上がり、どうにか私はその場を離れた。
          </TextBlock>
          <hr />
          <Notification message="2:00 比良川 中流"></Notification>
          <TextBlock className="mt-20 pb-20">
            行く当てもなくふらふらと歩き、
            <br />
            いつの間にか私は山の中にいた。
            <br />
            近くにあった川で肉片を洗い流し、
            <br />
            ついでに頭を冷やす。
            <br />
            <br />
            「…どうしよう…」
            <br />
            <br />
            ようやく理性が戻ってくる。
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            恐らく既に砕けた地蔵は発見されているだろう。
            <br />
            そうなったら、村人たちはどうするんだろう。
            <br />
            全員で犯人を捜し、捕らえ…
            <br />
            そこまで考えたところで首を振る。
            <br />
            悪い想像はよそう。そんなことがあるわけがない。
            <br />
            少し疲れているんだ。そうだ、祟りなんてものもあるわけがないんだ。
            <br />
            <br />
            しかし、だとしたらあれは何だったんだろう？服についた染みが、あれは現実だったのだとどうしようもなく思い出させる。
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            とにかく一度キャンプに戻ろう。
            <br />
            そうすれば樹と啓がいる。
            <br />
            着替えて、二人に相談して、
            <br />
            それからでも遅くはないはずだ。
            <br />
            そう考え、私は川沿いに歩き出す。
            <br />
            この川を下れば、さっきの河川敷に出るだろう。
            <br />
            それですべて終わる。
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            『…本当に？』
            <br />
            <br />
            不意に声が聞こえてくる。
            <br />
            <br />
            『本当に、二人は信じてくれるのかなぁ？地蔵が勝手に爆発したー、なんて』
            <br />
            『お地蔵様を壊したのはあなた』
            <br />
            『ぜーんぶあなたが悪いの』
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            くすくす、くすくす。
            <br />
            不釣り合いに明るい声が頭の中に反響する。
            <br />
            <br /> 『早く諦めちゃえばいいのに』
            <br />
            『早く認めちゃえばいいのに』
            <br />
            『だって、もう分かってるんでしょ？』
            <br />
            『だって、もう気づいてるんでしょ？』
            <br />
            『あなたはもう、お地蔵様に祟られ―』
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            「…そんなわけないでしょ！」
            <br />
            <br />
            思わず叫んでみて気づく。
            <br />
            これは自分の心の声だ。
            <br />
            自分で思っているよりずっと疲弊していたんだ。
            <br />
            自分の不安が形になっただけ。
          </TextBlock>

          <TextBlock className="mt-20 pb-20">
            「…祟りなんて、信じないから」
            <br />
            <br />
            口に出していってみる。
            <br />
            そう告げれば告げるほど空しいとわかっていても、
            <br />
            強がるよりほかに道は残されていなかったのだ。
          </TextBlock>

          <hr />

          <Notification message="3:00 水掫村 キャンプ場" />

          <TextBlock className="mt-20 pb-40">
            「やー、随分遅かったねぇ。やっぱ樹は起きそうになかったよ、案の定」
            <br />
            <br />
            啓の開口一番は驚くほど気の抜けるセリフから始まった。
            <br />
            <br />
            「どうしたのその服。結構しっかり汚れてるね」
            <br />
            <br />
            先程と全く変わらない彼の雰囲気に強い安心を覚えながら、私はここ数時間のことを話した。
            <br />
            <br />
            「ちょっと、酷い体験をしまして」
          </TextBlock>
          <TextBlock className="mt-20 pb-20">
            啓は少し考えこんでいたが、やがて顔を上げるとこんなことを言い出した。
            <br />
            <br />
            「…俄かには信じ難い。信じ難い、が…有り得ないと言い切れる範囲でもないな。
            <br />
            一度、その現場を見せてくれないか？ 」
            <br />
            <br />
          </TextBlock>
        </div>
      )}
    </>
  );
};
export default Awe;
