import { Link } from "react-router-dom";
import css from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={css.containerNotFound}>
      <h1>404 - Page not found 😒</h1>
      <h2>Dont worry, you can</h2>
      <div className={css.link}>Go back to <Link to="/">Home</Link></div>
    </div>

  )
}

export default NotFoundPage