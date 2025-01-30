package ng_Prac;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

public class Dependency_Login_Swg {

	WebDriver driver;
	Login_Page_POM_Repo obj;

	@BeforeClass
	public void setup() {
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
		driver.manage().window().maximize();
		driver.get("https://www.saucedemo.com/v1/");

	}

	@Test(priority = 1)
	public void Test_Login() {
		obj = new Login_Page_POM_Repo(driver);
		obj.setUserName("standard_user"); // Accessing methods from POM using its class object
		obj.Txt_UserName.clear(); // Accessing WebElements from POM using its using class object
		obj.setUserName("standard_user");
		obj.setPAssword("secret_sauce");
		obj.clickLogin();
		}

	@Test(priority = 2)
	public void Assert_Title() {
		Assert.assertEquals(driver.getTitle(), "Swag Labs"); // Asserting the Page Title.
	}

	@Test(priority = 3)
	public void Soft_Assert() {
		SoftAssert sa = new SoftAssert(); // SoftAssert is a class.
		// To Reuse this object, declare a class variable outside method and initiate in
		// multiple methods.
		sa.assertEquals(driver.getTitle(), "Swag Labs");
		sa.assertAll();
	}

	@Test(priority = 4, dependsOnMethods="Test_Login")
	public void Test_Logout() {
		Login_Page_POM_Repo obj1 = new Login_Page_POM_Repo(driver);
		obj1.clicklogout();
	}

	@AfterClass
	public void tearDown() {
		driver.quit();
	}
}
