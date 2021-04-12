import Head from 'next/head';
import Link from 'next/link';

export default function Terms(): JSX.Element {
  return (
    <div className="pt-20 pb-20 px-4 font-sans">
      <Head>
        <title>利用規約</title>
      </Head>
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl mb-3 font-bold">利用規約</h2>
        <hr className="border-gray-300" />
        <p className="mt-3">
          この利用規約（以下，「本規約」といいます。）は，本サービス運営者（以下，「運営者」といいます。）が本ウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
        </p>
        <section className="mt-6">
          <h3 className="text-lg font-bold">第1条（適用）</h3>
          <p className="mt-3">
            本規約は，ユーザーと運営者との間の本サービスの利用に関わる一切の関係に適用されるものとします。
            <br />
            運営者は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
          </p>
        </section>
        <section className="mt-6">
          <h3 className="text-lg font-bold">第2条（利用登録）</h3>
          <p className="mt-3">
            本サービスにおいては，登録希望者が本規約に同意の上，運営者の定める方法によって利用登録を申請し，運営者がこれを承認することによって，利用登録が完了するものとします。
            <br />
            運営者は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
          </p>
          <ol className="list-decimal pl-6 mt-2">
            <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
            <li>本規約に違反したことがある者からの申請である場合</li>
            <li>その他，運営者が利用登録を相当でないと判断した場合</li>
          </ol>
        </section>
        <section className="mt-6">
          <h3 className="text-lg font-bold">
            第3条（ユーザーIDおよびパスワードの管理）
          </h3>
          <p className="mt-3">
            ユーザーは，自己の責任において，本サービスのユーザーIDおよびパスワードを適切に管理するものとします。ユーザーは，いかなる場合にも，ユーザーIDおよびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。運営者は，ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には，そのユーザーIDを登録しているユーザー自身による利用とみなします。ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は，運営者に故意又は重大な過失がある場合を除き，運営者は一切の責任を負わないものとします。
          </p>
        </section>
        <section className="mt-6">
          <h3 className="text-lg font-bold">第4条（禁止事項）</h3>
          <p className="mt-3">
            ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
          </p>
          <ol className="list-decimal pl-6 mt-2">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>
              運営者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
            </li>
            <li>
              本サービスの運営を妨害する行為、または妨害するおそれのある行為
            </li>
            <li>他者の個人情報等を収集または蓄積する行為</li>
            <li>他者に成りすます行為</li>
            <li>反社会的勢力に対して直接的または間接的に利益を供与する行為</li>
            <li>
              本サービスの利用者および運営者、第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為
            </li>
            <li>他の利用者および第三者を欺く虚偽の内容を記載する行為</li>
            <li>
              スパムとみなされる行為（機械により自動生成された文章の投稿や同一内容の文章を繰り返し投稿する行為など）
            </li>
            <li>
              過度に暴力的な表現、露骨な性的表現、人種、国籍、信条、性別、社会的身分、門地等による差別につながる表現、自殺、自傷行為、薬物乱用を誘引または助長する表現、他人に不快感を与える表現等、不適切な内容を投稿する行為
            </li>
            <li>
              性行為やわいせつな行為を目的とする行為、面識のない異性との出会いや交際を目的とする行為、他者に対する嫌がらせや誹謗中傷
            </li>
            <li>宗教活動または宗教団体への勧誘行為</li>
            <li>その他、運営者が不適切と判断する行為</li>
          </ol>
        </section>
        <section className="mt-6">
          <h3 className="text-lg font-bold">
            第5条（本サービスの提供の停止等）
          </h3>
          <p className="mt-3">
            運営者は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
          </p>
          <ol className="list-decimal pl-6 mt-2">
            <li>
              本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
            </li>
            <li>
              地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合
            </li>
            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
            <li>その他，当社が本サービスの提供が困難と判断した場合</li>
          </ol>
          <p className="mt-3">
            運営者は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。
          </p>
        </section>
        <section className="mt-6">
          <h3 className="text-lg font-bold">第6条（利用制限および登録抹消）</h3>
          <p className="mt-3">
            運営者は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，アカウントに関わるデータを削除し，ユーザーに対して本サービスの全部もしくは一部の利用を制限しまたはユーザーとしての登録を抹消することができるものとします。
          </p>
          <ol className="list-decimal pl-6 mt-2">
            <li>本規約のいずれかの条項に違反した場合</li>
            <li>登録事項に虚偽の事実があることが判明した場合</li>
            <li>運営者からの連絡に対し，一定期間返答がない場合</li>
            <li>本サービスについて，最終の利用から一定期間利用がない場合</li>
            <li>その他，運営者が本サービスの利用を適当でないと判断した場合</li>
          </ol>
          <p className="mt-3">
            運営者は，本条に基づき運営者が行った行為によりユーザーに生じた損害について，一切の責任を負いません。
          </p>
        </section>
        <section className="mt-6">
          <h3 className="text-lg font-bold">
            第7条（保証の否認および免責事項）
          </h3>
          <p className="mt-3">
            運営者は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
            <br />
            運営者は，本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。
            <br />
            運営者は，運営者の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（運営者またはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）について一切の責任を負いません。
            <br />
            運営者は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
          </p>
        </section>
        <section className="mt-6">
          <h3 className="text-lg font-bold">第8条（サービス内容の変更等）</h3>
          <p className="mt-3">
            運営者は，ユーザーに通知することなく，本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。
          </p>
        </section>
        <section className="mt-6">
          <h3 className="text-lg font-bold">第9条（利用規約の変更）</h3>
          <p className="mt-3">
            運営者は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。
          </p>
        </section>
        <section className="mt-6">
          <h3 className="text-lg font-bold">第10条（通知または連絡）</h3>
          <p className="mt-3">
            ユーザーと運営者との間の通知または連絡は，運営者の定める方法によって行うものとします。
          </p>
        </section>
        <section className="mt-6">
          <h3 className="text-lg font-bold">第11条（権利義務の譲渡の禁止）</h3>
          <p className="mt-3">
            ユーザーは，運営者の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。
          </p>
        </section>
        <section className="mt-6">
          <h3 className="text-lg font-bold">第12条（準拠法・裁判管轄）</h3>
          <p className="mt-3">
            本規約の解釈にあたっては，日本法を準拠法とします。本サービスに関して紛争が生じた場合には，運営者の所在地を管轄する裁判所を専属的合意管轄とします。
          </p>
        </section>
        <section className="mt-6">
          <h3 className="text-lg font-bold">附則</h3>
          <p className="mt-3">2021年4月12日制定</p>
        </section>
        <p className="mt-3">以上</p>
      </div>

      <div className="mt-20 text-center">
        <button className="text-blue-500 hover:underline">
          <Link href="/">
            <a>ホームに戻る</a>
          </Link>
        </button>
      </div>
    </div>
  );
}
