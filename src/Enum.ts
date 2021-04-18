export enum API_ROUTES {
  PING = '/ping',
  SEARCH_TRENDING = '/search/trending',
  COIN = '/coins/{id}',
  COIN_LIST = '/coins/list',
  COIN_MARKET = '/coins/markets',
  COIN_TICKERS = '/coins/{id}/tickers',
  COIN_HISTORY = '/coins/{id}/history',
  COIN_MARKET_CHART = '/coins/{id}/market_chart',
  COIN_MARKET_CHART_RANGE = '/coins/{id}/market_chart/range',
  COIN_STATUS_UPDATES = '/coins/{id}/status_updates',
  COIN_OHLC = '/coins/{id}/ohlc',
  SIMPLE_PRICE = '/simple/price',
  SIMPLE_SUPPORTED_CURRENCIES = '/simple/supported_vs_currencies',
  SIMPLE_TOKEN_PRICE = '/simple/token_price/{id}',
  CONTRACT = '/coins/{id}/contract/{contract_address}',
  CONTRACT_MARKET_CHART = '/coins/{id}/contract/{contract_address}/market_chart',
  CONTRACT_MARKET_CHART_RANGE = '/coins/{id}/contract/{contract_address}/market_chart/range',
  EXCHANGES = '/exchanges',
  EXCHANGE_LIST = '/exchanges/list',
  EXCHANGE_ID = '/exchanges/{id}',
  EXCHANGE_ID_TICKER = '/exchanges/{id}/tickers',
  EXCHANGE_ID_STATUS_UPDATES = '/exchanges/{id}/status_updates',
  EXCHANGE_ID_VOL_CHART = '/exchanges/{id}/volume_chart',
  FINANCE_PLATFORM = '/finance_platforms',
  FINANCE_PRODUCT = '/finance_products'
}

export type PLATFORMS = 'ethereum' | 'tron'
