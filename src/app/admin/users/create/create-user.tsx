import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});
const mont = montserrat.className;
export default function CreateUser() {
    return (
        <div className={`newUser ${mont}`}>
            <div className="newUser__heading">
                <span>Create new user</span>
            </div>
            <div className="newUser__container">
                <form className="adminForm__grid newUser__create-form">
                    <div className="adminForm__row">
                        <label className="newUser__input-label" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="newUser__input"
                            id="name"
                            type="text"
                        />
                    </div>
                    <div className="adminForm__row">
                        <label className="newUser__input-label" htmlFor="email">
                            Email address
                        </label>
                        <input
                            className="newUser__input"
                            id="email"
                            type="text"
                        />
                    </div>
                    <div className="adminForm__row">
                        <label
                            className="newUser__input-label"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="newUser__input"
                            id="password"
                            type="text"
                        />
                    </div>
                    <div className="adminForm__row">
                        <label
                            className="newUser__input-label"
                            htmlFor="re-enterPass"
                        >
                            Re-enter Password
                        </label>
                        <input
                            className="newUser__input"
                            id="re-enterPass"
                            type="text"
                        />
                    </div>
                    <div className="adminForm__row">
                        <button>Cancel</button>
                        <button>Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
