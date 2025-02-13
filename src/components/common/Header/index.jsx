import './index.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="/public/LISHE_logo.png"
          className="header__logo-image"
          alt="Logo"
          title="László István Honvéd Sporthorgász Egyesület"
        />
      </div>
      <div className="header__title">
        <h3>László István Honvéd Sporthorgász Egyesület</h3>
      </div>
    </div>
  );
};

export default Header;
