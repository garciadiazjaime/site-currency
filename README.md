# Site Currency

[![Build Status](https://travis-ci.org/garciadiazjaime/site-currency.svg)](https://travis-ci.org/garciadiazjaime/site-currency)

The goal is to display currency rates and USD/MXN buy/sale on Mexico.

Development
----

###  Install Dependencies

`yarn`

### Run Dev

`yarn dev`

### Run tests
`yarn test`

### Run lint
`yarn lint`

### Export static site
`yarn build`

### gsutil commands
`gsutil mb gs://currency.mintitmedia.com/`
`gsutil -m rm -r gs://currency.mintitmedia.com/*`
`gsutil -m cp -r ./ gs://currency.mintitmedia.com/`
`gsutil iam ch allUsers:objectViewer gs://currency.mintitmedia.com/`
`gsutil web get gs://currency.mintitmedia.com`


How to add a new source
----

- Add new configs (./src/config.js)
- Create new **transformer** (./src/transformer/)
- Expose new transformer (./src/transformer/index.js)
- Write tests for new transformer (./tests/transformer/)
- Adjust tests for sources (./tests/utils/sources.test.js)

How to contribute
----
- Feel free to Fork repo and create a PR against `master`.
- Ask to be added as a contributor, create your branch and open a PR against `master`.

Contact
----
For any question send us a line to: `info@mintitmedia.com`
