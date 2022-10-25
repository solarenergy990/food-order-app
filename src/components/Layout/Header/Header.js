import HeaderCartButton from "./HeadreCartButton/HeaderCartButton";
import mealsImg from "../../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="table full of delicious food" />
      </div>
    </>
  );
};

export default Header;