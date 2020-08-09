# URL Shortener
> An application for shortening urls.
> This application contains both the frontend, backend and db in a single repository
## Project Structure
```$xslt
├── Readme.md
├── back-end
├── docker-compose.yml
└── urlshorter (frontend)
```
### Clone the repository
```bash
git clone https://github.com/LORD-KAY/urlshortener
```

Navigate to the root directory i.e the urlshortener
```bash
cd urlshortener/
```

### Spin up the app containers
Start the frontend, backend and the db using the docker-compose.yml file
```bash
docker-compose up -d
```
Access the app from your browser on http://localhost:8080
