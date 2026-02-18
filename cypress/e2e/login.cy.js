import Loginpage from "../pages/loginPage";
import data from "../fixtures/data.json"
import Dashboardpage from "../pages/dashboardPage";

describe("Login tests", () =>{
    beforeEach(() =>{
        Loginpage.goToLogin()
    });

    it("should login successfully with valid credentials", ()=>{
        Loginpage.login(data.userRegister.user, data.userRegister.password)
        /* Wait until authentication process completes and UI is fully loaded */
        Loginpage.waitSpinnerFinished()
        Dashboardpage.validateDashboard()
    });

    it("should display error message in pop up with invalid credentials", () =>{
        Loginpage.login(data.invalidateData.user, data.invalidateData.password)
        Loginpage.validatePopUpOfErrorLogin()
    });

    it("should display error message with invalid credentials", () => {
        Loginpage.login(data.invalidateData.empty, data.invalidateData.empty)
        Loginpage.validateLoginEmpty()
    });
})