package ng_Prac;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Login_Page_POM_Repo {

	WebDriver driver; // Creating driver variable to access in following methods.

	// Constructors
	Login_Page_POM_Repo(WebDriver driver) // Receiving WebDriver from Test class
	{
		this.driver = driver; // Assigning the received driver to local driver variable.
		PageFactory.initElements(driver, this); // PageFactory is a class with initEelements in WebDriver Interface.
		// initElements will Initiate all the elements with the driver
	}

	// Locators - Finding Web Elements using @FindBy annotations and storing in
	// WebElement Variable.
	@FindBy(xpath = "//input[@id='user-name']")
	WebElement Txt_UserName;
	@FindBy(xpath = "//input[@id='password']")
	WebElement Txt_Password;
	@FindBy(xpath = "//input[@id='login-button']")
	WebElement Btn_Login;
	// To Find multiple elements use same @FindBy, But store it in List<WebElement>
	// WE_Variable;

	@FindBy(xpath = "//*[@id='menu_button_container']/div/div[3]/div/button")
	WebElement Btn_OpenMenu;
	@FindBy(id = "logout_sidebar_link")
	WebElement Lnk_Logout;

	// Action Methods
	public void setUserName(String user) {
		Txt_UserName.sendKeys(user); // Passing the received text (from Test class) to the application.
	}

	public void setPAssword(String pwd) {
		Txt_Password.sendKeys(pwd); // Passing the received text (from Test class) to the application.
	}

	public void clickLogin() {
		Btn_Login.click(); // Clicking Button on this function call from Test Class
	}

	public void clicklogout() {
		Btn_OpenMenu.click(); // Clicking Side Menu.
		Lnk_Logout.click(); // Clicking Logout Link.
	}
}
