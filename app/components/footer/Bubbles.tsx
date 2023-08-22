"use client"
import { useEffect, useState } from "react";
import styles from './Bubbles.module.css'

function useTopOfPage() {
  const [scrollDirection, setScrollDirection] = useState<boolean>(true);
  useEffect(() => {
    const topOfThePage = () => {
      if (
        window.innerHeight + Math.ceil(window.pageYOffset + 1) >=
        document.body.offsetHeight
      ) {
        setScrollDirection(false);
      } else {
        setScrollDirection(true);
      }
    };

    window.addEventListener("scroll", topOfThePage); // add event listener
    return () => {
      window.removeEventListener("scroll", topOfThePage); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export function Bubbles() {
  const isTop = useTopOfPage();

  return(
    <>
      {!isTop && (
        <div className={styles.bubbles}>
          <div
            className={styles.bubble}
            style={{
              "--size": "3.501309456682397rem",
              "--distance": "9.023291562324701rem",
              "--position": "22.965235288235107%",
              "--time": "2.758305044353019s",
              "--delay": "-3.188723974093668s",
            } as React.CSSProperties}
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.2354330833264235rem",
              "--distance": "7.619261712949051rem",
              "--position": "96.09631737529327%",
              "--time": "2.876544234184583s",
              "--delay": "-3.4373004851403692s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.6964718910854435rem",
              "--distance": "8.138006008685414rem",
              "--position": "95.91239795461081%",
              "--time": "2.0450619233614202s",
              "--delay": "-3.6772091926102157s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.267774705375294rem",
              "--distance": "7.572284764010002rem",
              "--position": "79.32587282317891%",
              "--time": "2.55318448535919s",
              "--delay": "-2.419346741735519s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.0220881440492766rem",
              "--distance": "9.858525518727575rem",
              "--position": "15.168281309296098%",
              "--time": "2.02979465928302s",
              "--delay": "-3.023679657112826s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.4849676487380377rem",
              "--distance": "8.755567752443657rem",
              "--position": "80.15111420406879%",
              "--time": "2.521003057017053s",
              "--delay": "-2.936885106787905s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.703435347174847rem",
              "--distance": "8.01254754166499rem",
              "--position": "27.768997480155306%",
              "--time": "2.8300778034068146s",
              "--delay": "-3.0190447904635302s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.4863837797852115rem",
              "--distance": "6.644688107204997rem",
              "--position": "-0.8683949709350891%",
              "--time": "2.5995546396634044s",
              "--delay": "-3.137703855070314s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.1509416489214725rem",
              "--distance": "9.202112713641519rem",
              "--position": "87.81750083881269%",
              "--time": "2.853039139757927s",
              "--delay": "-2.1989766771833326s",
            } as React.CSSProperties }
          />

          <div
            className={styles.bubble}
            style={{
              "--size": "3.748398374637187rem",
              "--distance": "8.132763920358874rem",
              "--position": "57.29286566949439%",
              "--time": "2.0999517629860036s",
              "--delay": "-2.1315945507215837s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.055652081245526rem",
              "--distance": "8.242781812078178rem",
              "--position": "35.76708771236092%",
              "--time": "3.622300415118218s",
              "--delay": "-3.950060226823927s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.3873626868484923rem",
              "--distance": "9.152353004679082rem",
              "--position": "36.698044911037385%",
              "--time": "3.8208454268603274s",
              "--delay": "-3.028396617364212s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.544852749307153rem",
              "--distance": "6.730811505998282rem",
              "--position": "-2.5018475403392393%",
              "--time": "2.4744553786555152s",
              "--delay": "-2.9237199568552596s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.1428338356969734rem",
              "--distance": "8.860506907185027rem",
              "--position": "62.452284688017144%",
              "--time": "2.617418383189357s",
              "--delay": "-2.1924859987275473s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.812042780892419rem",
              "--distance": "8.006226977783278rem",
              "--position": "8.703277303270925%",
              "--time": "3.8041936097932196s",
              "--delay": "-3.4850462145349623s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.9089656525064926rem",
              "--distance": "9.000646599011667rem",
              "--position": "-0.5282144836364218%",
              "--time": "3.426351186762597s",
              "--delay": "-3.9266446329658797s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.00408625658171rem",
              "--distance": "6.074918363402181rem",
              "--position": "91.25776478122258%",
              "--time": "2.80281055164908s",
              "--delay": "-3.2326510204042904s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.456516337013933rem",
              "--distance": "8.34249965307895rem",
              "--position": "64.09249779161678%",
              "--time": "2.5319803815235975s",
              "--delay": "-2.65084069183351s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.4476825222340786rem",
              "--distance": "7.806370013306061rem",
              "--position": "34.56676596188638%",
              "--time": "2.861091436551096s",
              "--delay": "-2.5921622457934688s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.924097953071371rem",
              "--distance": "6.994403629181877rem",
              "--position": "23.663695772546347%",
              "--time": "2.858923927764503s",
              "--delay": "-3.7354638440585495s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.7765934511660673rem",
              "--distance": "7.307671897350086rem",
              "--position": "6.654991154715441%",
              "--time": "2.84577635389524s",
              "--delay": "-2.6771622020197765s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.653875035051536rem",
              "--distance": "7.864927104695532rem",
              "--position": "74.81419943080957%",
              "--time": "2.710110563790949s",
              "--delay": "-2.138892876553459s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.8343245950995204rem",
              "--distance": "9.281158904284798rem",
              "--position": "18.691530343960963%",
              "--time": "2.4415812178984106s",
              "--delay": "-3.3908969738392716s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.510039765689114rem",
              "--distance": "8.849445054203532rem",
              "--position": "11.324741175395175%",
              "--time": "3.584356152848418s",
              "--delay": "-2.7055408260732117s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.180515458915557rem",
              "--distance": "8.5755969082558rem",
              "--position": "74.36765107917299%",
              "--time": "3.3503956056468485s",
              "--delay": "-2.2347910500890116s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.570325893029809rem",
              "--distance": "6.490322898932962rem",
              "--position": "87.58827288952354%",
              "--time": "3.8410208558122734s",
              "--delay": "-3.91736120888145s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.926785896728667rem",
              "--distance": "9.871229637402294rem",
              "--position": "84.37834200611003%",
              "--time": "2.8359266046771126s",
              "--delay": "-2.9089781778434634s",
            } as React.CSSProperties }
          />

          <div
            className={styles.bubble}
            style={{
              "--size": "3.2058082054790455rem",
              "--distance": "9.498341513624615rem",
              "--position": "10.570503307889842%",
              "--time": "3.973410613138317s",
              "--delay": "-2.6934019330844596s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.42369317871836rem",
              "--distance": "8.616469689940011rem",
              "--position": "39.46206887111767%",
              "--time": "2.0142795460925225s",
              "--delay": "-2.334581446346355s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.471070388611479rem",
              "--distance": "6.160293219084933rem",
              "--position": "2.5420203852755012%",
              "--time": "2.876471858469575s",
              "--delay": "-3.298777289234658s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.2955182882124623rem",
              "--distance": "9.457248884401302rem",
              "--position": "12.879800667671034%",
              "--time": "3.373117770176773s",
              "--delay": "-2.224929238277117s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.0119890939394587rem",
              "--distance": "6.078660653954968rem",
              "--position": "42.173088454579116%",
              "--time": "2.3110571643940716s",
              "--delay": "-3.3388716890200105s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.187798978209604rem",
              "--distance": "8.550659903054662rem",
              "--position": "95.8113054570921%",
              "--time": "2.5622034245464262s",
              "--delay": "-2.489722182274345s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.6943763010958905rem",
              "--distance": "7.92701264013691rem",
              "--position": "48.29711896819168%",
              "--time": "3.3599044469156407s",
              "--delay": "-2.3431854191775843s",
            } as React.CSSProperties }
          />

          <div
            className={styles.bubble}
            style={{
              "--size": "3.7473042387016946rem",
              "--distance": "6.645659939048972rem",
              "--position": "91.70390272132589%",
              "--time": "3.5963938273883578s",
              "--delay": "-3.639352318418135s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.767221533888441rem",
              "--distance": "7.784956252090834rem",
              "--position": "2.446089437801038%",
              "--time": "3.850344791719851s",
              "--delay": "-3.251439420169674s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.024937058679041rem",
              "--distance": "7.376676786085771rem",
              "--position": "92.87403762771686%",
              "--time": "2.83245344582751s",
              "--delay": "-3.5793636472756973s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.6286868017156397rem",
              "--distance": "8.76202682185738rem",
              "--position": "5.090992351597745%",
              "--time": "3.441182642949405s",
              "--delay": "-3.7815206749806207s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.3266590993709775rem",
              "--distance": "6.0392272219592rem",
              "--position": "10.925800455923307%",
              "--time": "3.692927121312916s",
              "--delay": "-2.232115477396572s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.528715321461119rem",
              "--distance": "7.446773948061571rem",
              "--position": "62.64094487688739%",
              "--time": "2.0049082649510743s",
              "--delay": "-2.8006637056514636s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.8853448004646856rem",
              "--distance": "7.272072225319505rem",
              "--position": "45.36093889974474%",
              "--time": "2.756417815165585s",
              "--delay": "-3.9339046202813974s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.04132382197089rem",
              "--distance": "6.7034621688853795rem",
              "--position": "95.08580252015149%",
              "--time": "3.2925978761702885s",
              "--delay": "-3.9352783374015923s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.659358845952215rem",
              "--distance": "7.1929222678082985rem",
              "--position": "82.49619807914966%",
              "--time": "3.780044887333865s",
              "--delay": "-2.505023338703392s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.861949124070779rem",
              "--distance": "6.578553472717676rem",
              "--position": "35.579931773334636%",
              "--time": "3.107015362727402s",
              "--delay": "-3.0514374574106227s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.645123545885232rem",
              "--distance": "8.917878667612204rem",
              "--position": "52.15093015027969%",
              "--time": "2.1482171831033696s",
              "--delay": "-3.355275897890168s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.650795977850581rem",
              "--distance": "7.521890829736566rem",
              "--position": "77.41089000111094%",
              "--time": "2.1968771886292133s",
              "--delay": "-3.638541571105704s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.232148659088952rem",
              "--distance": "6.168030302281786rem",
              "--position": "90.23725641507575%",
              "--time": "2.0322434485615903s",
              "--delay": "-2.776459629557481s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.517914068697575rem",
              "--distance": "7.067722689501093rem",
              "--position": "87.29147311758841%",
              "--time": "3.7263100877606594s",
              "--delay": "-2.710217551176412s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.502372812897687rem",
              "--distance": "6.872265720956597rem",
              "--position": "19.354981821713306%",
              "--time": "3.0044707208254864s",
              "--delay": "-2.1561853101066384s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.798819602351037rem",
              "--distance": "9.410540809186436rem",
              "--position": "28.829579012185327%",
              "--time": "2.257784772672007s",
              "--delay": "-2.600684198227388s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.066252663974492rem",
              "--distance": "8.720018578307164rem",
              "--position": "7.373620698817199%",
              "--time": "2.549059618821021s",
              "--delay": "-2.3932388805329197s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.8193608529573373rem",
              "--distance": "6.613835873874309rem",
              "--position": "40.97065476452527%",
              "--time": "3.3070392412783693s",
              "--delay": "-2.4949588653830146s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.773742991634588rem",
              "--distance": "9.83237027302869rem",
              "--position": "92.72941315839103%",
              "--time": "3.57926651469292s",
              "--delay": "-3.6870083797110818s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.2121968574222333rem",
              "--distance": "9.953189923386066rem",
              "--position": "53.621258971681556%",
              "--time": "3.0843040939877513s",
              "--delay": "-3.597344829536409s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.575549070565864rem",
              "--distance": "7.428411103400386rem",
              "--position": "71.9461802181566%",
              "--time": "2.3274990930921917s",
              "--delay": "-2.4556154316870953s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.9627333547069634rem",
              "--distance": "6.131602793239691rem",
              "--position": "41.69103007215016%",
              "--time": "2.670909688945936s",
              "--delay": "-3.247722781250689s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.449226183040225rem",
              "--distance": "7.675118282904708rem",
              "--position": "75.59932712658363%",
              "--time": "3.374997972835342s",
              "--delay": "-2.6796255731660703s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.9886072991011297rem",
              "--distance": "8.82554524657554rem",
              "--position": "66.80709026211335%",
              "--time": "2.0219435784931314s",
              "--delay": "-2.645669213930159s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.0425535791100478rem",
              "--distance": "8.927793464598965rem",
              "--position": "77.71201756880414%",
              "--time": "3.103549471472454s",
              "--delay": "-2.707540295726226s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.555574037828373rem",
              "--distance": "7.191056231300283rem",
              "--position": "38.544723651299385%",
              "--time": "2.6745494596937385s",
              "--delay": "-2.6780072206472054s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.154352563431416rem",
              "--distance": "7.913628528481842rem",
              "--position": "44.502834414225866%",
              "--time": "3.8768885074601513s",
              "--delay": "-3.242968585403502s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.2365637422158846rem",
              "--distance": "6.363633050582847rem",
              "--position": "46.580597631087876%",
              "--time": "2.0604530358243753s",
              "--delay": "-3.777389433436446s",
            } as React.CSSProperties }
          />

          <div
            className={styles.bubble}
            style={{
              "--size": "2.6128712252968134rem",
              "--distance": "7.955704737001723rem",
              "--position": "3.47030778464023%",
              "--time": "3.332835380011124s",
              "--delay": "-3.9921675397314567s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.701306805997745rem",
              "--distance": "8.73763369984339rem",
              "--position": "3.382159116321686%",
              "--time": "3.6762565171643375s",
              "--delay": "-2.70116749098036s",
            } as React.CSSProperties }
          />

          <div
            className={styles.bubble}
            style={{
              "--size": "3.5287646767576204rem",
              "--distance": "7.836748421075334rem",
              "--position": "56.48252209775928%",
              "--time": "2.9860950751581528s",
              "--delay": "-2.7298285181352058s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.622885474106251rem",
              "--distance": "6.772985837995142rem",
              "--position": "79.97533629386888%",
              "--time": "2.4935569275075804s",
              "--delay": "-3.6443515201844447s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.337288485378598rem",
              "--distance": "6.803766825446233rem",
              "--position": "24.91237166480782%",
              "--time": "2.9445428979057384s",
              "--delay": "-2.7455650289385463s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.517487299795562rem",
              "--distance": "9.381191431491846rem",
              "--position": "74.89535270840105%",
              "--time": "3.8577357645817125s",
              "--delay": "-2.5886836344277215s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.266147836311307rem",
              "--distance": "7.859595263978749rem",
              "--position": "95.24236596646654%",
              "--time": "2.656440454768149s",
              "--delay": "-3.7304981888863407s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.304231097907463rem",
              "--distance": "9.904468758227402rem",
              "--position": "82.71918465489674%",
              "--time": "3.5116116895652723s",
              "--delay": "-3.8330559506742707s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.0435891916845783rem",
              "--distance": "7.558282158928043rem",
              "--position": "95.68463273952865%",
              "--time": "3.0527081601181365s",
              "--delay": "-3.6258751678765075s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.691470613489853rem",
              "--distance": "6.755931519413482rem",
              "--position": "-1.154559379985629%",
              "--time": "2.069959685578533s",
              "--delay": "-2.7353983802275357s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.1047174043952452rem",
              "--distance": "8.104761060607071rem",
              "--position": "82.99071466683186%",
              "--time": "3.7197882144865133s",
              "--delay": "-3.9516265179688066s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.699908273583734rem",
              "--distance": "8.165705382119368rem",
              "--position": "85.55427315778189%",
              "--time": "2.7375588475698076s",
              "--delay": "-2.3282717827907478s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.3672276212312573rem",
              "--distance": "9.34658654716715rem",
              "--position": "48.4730934001958%",
              "--time": "2.2723068078287914s",
              "--delay": "-2.4941228344977935s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.9728451439191135rem",
              "--distance": "6.625789242684629rem",
              "--position": "92.47526706403796%",
              "--time": "2.0276545969512862s",
              "--delay": "-3.875100390348634s",
            } as React.CSSProperties }
          />

          <div
            className={styles.bubble}
            style={{
              "--size": "5.953960139958852rem",
              "--distance": "7.295143026783311rem",
              "--position": "83.57588434512793%",
              "--time": "2.3469051575787656s",
              "--delay": "-3.794904477878312s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.936730478272177rem",
              "--distance": "6.620476353869179rem",
              "--position": "14.762175544348985%",
              "--time": "3.7094566379944225s",
              "--delay": "-2.6091634582694865s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.807074495716522rem",
              "--distance": "8.645084185693879rem",
              "--position": "65.12060551242385%",
              "--time": "3.8109142609958875s",
              "--delay": "-3.345134713519211s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.333188528693067rem",
              "--distance": "9.34503485195993rem",
              "--position": "34.56680100674254%",
              "--time": "3.3366928408819145s",
              "--delay": "-3.161099526636421s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.480265083217962rem",
              "--distance": "7.582876770638861rem",
              "--position": "92.66900397878918%",
              "--time": "2.9978887976399466s",
              "--delay": "-3.3117142273757354s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.976090025424122rem",
              "--distance": "6.173240338513563rem",
              "--position": "44.940189787845725%",
              "--time": "2.048349731715559s",
              "--delay": "-2.6648326283907795s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.0633572771279365rem",
              "--distance": "8.04386202218296rem",
              "--position": "58.66401709630974%",
              "--time": "2.907713028400452s",
              "--delay": "-2.761358143246795s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.7928759602777893rem",
              "--distance": "8.256073720126528rem",
              "--position": "62.23419361331517%",
              "--time": "3.717627964682243s",
              "--delay": "-2.243936144378438s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.125964308025514rem",
              "--distance": "7.466595550842385rem",
              "--position": "71.21350445822794%",
              "--time": "2.3879689845877654s",
              "--delay": "-2.3071767461068515s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.7099560417011315rem",
              "--distance": "7.524108848918355rem",
              "--position": "2.4047249955059025%",
              "--time": "2.2545102388924727s",
              "--delay": "-2.93567616345705s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.737495288985966rem",
              "--distance": "9.690786102340818rem",
              "--position": "52.75982586470297%",
              "--time": "3.8883935473250495s",
              "--delay": "-2.8658435577869716s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.801644169110544rem",
              "--distance": "8.56628512151634rem",
              "--position": "67.14243303246482%",
              "--time": "2.1102790960813462s",
              "--delay": "-3.5670946551776446s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.5405539946160154rem",
              "--distance": "8.600335740291104rem",
              "--position": "-3.774882835279787%",
              "--time": "3.7059940089686902s",
              "--delay": "-2.3812815922223693s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.567371276879781rem",
              "--distance": "8.400320315942995rem",
              "--position": "31.74608228584855%",
              "--time": "3.7879979990212362s",
              "--delay": "-3.618161795915738s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.384082412974098rem",
              "--distance": "9.276466381233414rem",
              "--position": "1.6816455558648435%",
              "--time": "3.578783292470926s",
              "--delay": "-3.6486604424369977s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.4718295468529785rem",
              "--distance": "8.925914389018153rem",
              "--position": "56.42269804428913%",
              "--time": "2.077607926329566s",
              "--delay": "-2.4281094877096883s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.409113883342899rem",
              "--distance": "8.935859961490394rem",
              "--position": "21.266623428489197%",
              "--time": "2.3288981140252947s",
              "--delay": "-3.7777187719047176s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.901398152389266rem",
              "--distance": "8.838680475137771rem",
              "--position": "77.021652688114%",
              "--time": "3.437560486891191s",
              "--delay": "-3.0904210931041867s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.551096947559179rem",
              "--distance": "8.817463927951604rem",
              "--position": "59.10329591745189%",
              "--time": "3.4139074287531277s",
              "--delay": "-2.766268316425274s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.8449111599225745rem",
              "--distance": "7.515178659923295rem",
              "--position": "47.59750981647443%",
              "--time": "2.7421487015043895s",
              "--delay": "-3.747326608043053s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.5847165067489515rem",
              "--distance": "9.472682901686586rem",
              "--position": "71.36080498241814%",
              "--time": "3.237486349025103s",
              "--delay": "-2.328455215179349s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.6016867513349933rem",
              "--distance": "8.906959873649498rem",
              "--position": "71.4236640303019%",
              "--time": "2.8855811306667647s",
              "--delay": "-2.7909123056945435s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.303741587490978rem",
              "--distance": "9.58289090359231rem",
              "--position": "0.6466997142868642%",
              "--time": "2.8966983805196636s",
              "--delay": "-2.040112609747316s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.036416869042777rem",
              "--distance": "6.481547761060984rem",
              "--position": "58.282818111621%",
              "--time": "3.550137352190366s",
              "--delay": "-2.4748862775927374s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.347610199101602rem",
              "--distance": "8.916573078134077rem",
              "--position": "62.92108258083428%",
              "--time": "2.724828117047761s",
              "--delay": "-2.093822671882882s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.231436904598004rem",
              "--distance": "6.299096617686541rem",
              "--position": "47.413946747445614%",
              "--time": "3.8393310324177974s",
              "--delay": "-3.126407625830733s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.8837089609559854rem",
              "--distance": "7.064843022312035rem",
              "--position": "16.998602951140427%",
              "--time": "3.7566119654100008s",
              "--delay": "-3.8793726297075s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.280419948784128rem",
              "--distance": "8.842037239334282rem",
              "--position": "51.37503675417%",
              "--time": "3.1684052081495637s",
              "--delay": "-3.090989259162481s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.131882113135671rem",
              "--distance": "8.70250698761602rem",
              "--position": "79.60047828216935%",
              "--time": "2.9125022631587303s",
              "--delay": "-3.0243508721087777s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.593000207350962rem",
              "--distance": "9.447024454261902rem",
              "--position": "4.3285601463867245%",
              "--time": "3.3838726208018284s",
              "--delay": "-3.2583751729883907s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.352841032001102rem",
              "--distance": "8.593128834757747rem",
              "--position": "87.76814051766931%",
              "--time": "3.4793052219671137s",
              "--delay": "-3.545571252155241s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.521024752094391rem",
              "--distance": "7.803027555183706rem",
              "--position": "31.221723588343387%",
              "--time": "3.1545235411597017s",
              "--delay": "-2.9144462817626415s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.834147609138251rem",
              "--distance": "8.912704218236318rem",
              "--position": "40.704839651723795%",
              "--time": "3.9296472433830507s",
              "--delay": "-3.89418779204519s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.1689055231785215rem",
              "--distance": "6.389928520302802rem",
              "--position": "11.081622693329663%",
              "--time": "3.2723003917020366s",
              "--delay": "-2.1697713304776656s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.919503356743553rem",
              "--distance": "7.887692734000413rem",
              "--position": "77.2996492953859%",
              "--time": "2.8590721289552836s",
              "--delay": "-2.003488259435779s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "5.33618913591247rem",
              "--distance": "6.341758609119313rem",
              "--position": "14.7743180302961%",
              "--time": "2.493470911811097s",
              "--delay": "-3.3483836033592267s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "4.669927227059956rem",
              "--distance": "6.477599667205088rem",
              "--position": "59.63403399652182%",
              "--time": "3.3264470409575098s",
              "--delay": "-2.059204153916021s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.9694942539891462rem",
              "--distance": "6.297560413507876rem",
              "--position": "87.78472308061052%",
              "--time": "2.590714111431893s",
              "--delay": "-3.63846118542507s",
            } as React.CSSProperties }
          />

          <div
            className={styles.bubble}
            style={{
              "--size": "2.814601346964105rem",
              "--distance": "8.629265967962127rem",
              "--position": "54.22009936906262%",
              "--time": "2.513487905432367s",
              "--delay": "-2.4212601161562928s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.882915043881127rem",
              "--distance": "6.567353444449213rem",
              "--position": "71.50827915528625%",
              "--time": "2.6066620013695525s",
              "--delay": "-2.790252829488432s",
            } as React.CSSProperties }
          />

          <div
            className={styles.bubble}
            style={{
              "--size": "4.417545438303735rem",
              "--distance": "9.893191675908604rem",
              "--position": "31.85464898923192%",
              "--time": "2.2861331778660263s",
              "--delay": "-2.6602223272467076s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "3.6370416151429312rem",
              "--distance": "8.97263169749133rem",
              "--position": "62.11631800326333%",
              "--time": "2.675069678944174s",
              "--delay": "-2.8553923733092295s",
            } as React.CSSProperties }
          />
          <div
            className={styles.bubble}
            style={{
              "--size": "2.408659996833661rem",
              "--distance": "6.6256305562595825rem",
              "--position": "72.4257788215121%",
              "--time": "3.0742488109762243s",
              "--delay": "-2.166099824895348s",
            } as React.CSSProperties }
          />
        </div>
      )}
    </>
  )

}