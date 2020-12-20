import Link from 'next/link';

import classes from '../styles/error.module.scss';

export default function ErrorPage() {
  return (
    <div className={classes.error}>
      <h1 className={classes.error__url}>Error 404</h1>
      <h2>Please <Link href={'/'}><a className={classes.error__url}>go back</a></Link> to home page</h2>
    </div>
  );
}