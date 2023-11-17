import Header from '../components/Header/Header';

export default function Error() {
  return (
    <>
      <div className="errorPage-container">
        <Header page="list" />

        <section className="errorPage">
          <span className="errorPage__text">Page not found</span>
        </section>
      </div>
    </>
  );
}
