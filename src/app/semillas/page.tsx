import FiltroComponente from '../../../components/QuestionsSeeds'
import style from './semillas.module.css'
export default function Semillas (){
    return <div className={style.container}>
                <div className={style.slot}>
                    quiero ver <br/>
                    todas las semas
                </div>
                <div className={style.slot}>
                    <FiltroComponente/>
                </div>
    </div>
   }