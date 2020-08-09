from serpapi.google_search_results import GoogleSearchResults

params = {
    "q": "Pythagorean Theorem",
    "hl": "en",
    "gl": "us",
    "google_domain": "google.com",
    "api_key": "secret_api_key"
}

client = GoogleSearchResults(params)
results = client.get_dict()
