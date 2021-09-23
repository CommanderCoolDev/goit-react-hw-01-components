//импорт стиля контейнера
import s from 'components/Container/Container.module.css';


//сам контейнер
export default function Container ({children}) {
    return (
    <section className = {s.container}>{children}</section>
    );
}

