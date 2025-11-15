# 🧪 End-to-End Testing with Playwright

This project uses **Playwright** for end-to-end (E2E) test automation.\
Follow the guide below to set up and run the project on your machine
after cloning it.

------------------------------------------------------------------------

## 📦 Prerequisites

Make sure you have the following installed:

-   **Node.js (recommended: LTS version)**\
    https://nodejs.org/

-   **Git**\
    https://git-scm.com/

------------------------------------------------------------------------

## 📥 1. Clone the repository

``` bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Navigate into the project folder:

``` bash
cd YOUR-REPOSITORY
```

------------------------------------------------------------------------

## 📚 2. Install dependencies

``` bash
npm install
```

------------------------------------------------------------------------

## 🧩 3. Install Playwright browsers

Playwright needs to download the browsers it will use for testing.

``` bash
npx playwright install
```

Optional (with extra dependencies):

``` bash
npx playwright install --with-deps
```

------------------------------------------------------------------------

## ▶️ 4. Run all tests

``` bash
npx playwright test
```

------------------------------------------------------------------------

## 🖥️ Run tests in UI mode

``` bash
npx playwright test --ui
```

------------------------------------------------------------------------

## 🔍 5. View the HTML test report

``` bash
npx playwright show-report
```

------------------------------------------------------------------------


## 🛠 Useful Commands

 ``` bash
  Run tests (headless)   `npx playwright test`
  Run tests in UI mode   `npx playwright test --ui`
  Show test report       `npx playwright show-report`
  Install browsers       `npx playwright install`
```
------------------------------------------------------------------------
