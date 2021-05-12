Feature: EPAM website

  Scenario: Sending to Our work page
    Given Web page https://www.epam.com/
    And I scroll down to 'our results' section
    When I click on 'Learn more' button
    Then I should get redirected to Our work page

  Scenario: Sending to Southwest Airlines page
    Given Web page https://www.epam.com/
    And I scroll down to 'our results' section
    When I click on 30% tile
    Then I should get redirected to transforming insurance page
    

  Scenario: Checking downloading on page
    Given I am on page https://www.epam.com/our-work/case-studies/southwest-airlines-digital-wayfinding-design-and-prototype
    When I click button 'download pdf'
    Then Pdf file should be downloaded

  Scenario: Checking contact us section
    Given Web page https://www.epam.com/
    And I scroll down to 'Hello. How can we help you?' section
    When I click on 'contact us' button
    Then I should get redirected to Contact us page with form

  Rule: countries correspond to the continents in which they are located

    Scenario: Checking our offices section
      Given I am on https://www.epam.com
      And I scroll down to 'our offices' section
      When I click on europe tab
      Then I can see these countries: Austria, Bulgaria, Czech Republic, France

    Scenario: Checking our offices section
      Given I am on https://www.epam.com
      And I scroll down to 'our offices' section
      When I click on americas tab
      Then I can see these countries: Canada, Mexico, United States

  Scenario: Searching for job
    Given I am on https://www.epam.com/careers
    When I fill simple form suitable to my skills and click button find
    Then I should get a list of suitable jobs

  Scenario: Changing language
    Given I am on https://www.epam.com
    When I click 'Global (EN)' dropdown and choose Ukrainian
    Then I can see all information on site in Ukrainian
