# 🐱 Cat-as-a-service API 🐾

Welcome to the Cat-as-a-service API! This API allows you to retrieve random pictures and information about cats, and is perfect for any cat lover out there.

## 🚀 Getting Started

To use this API, you can send a GET request to the following endpoint:

```
https://catasaservice.xyz/api/random
```

This will return a JSON object with information about a random cat, including a picture, breed, temperament, and more.

## 📊 Response Format

The response from the API will be in the following format:

```
{
    "message": "Success",
    "error": false,
    "meta_data": null,
    "data": {
        "sno": "191",
        "catid": "39927304",
        "url": "https://www.petfinder.com/cat/tazzy-39927304/ca/sherman-oaks/purrfect-solutions-feline-rescue-ca470/?referrer_id=3830981a-ad4c-4f85-872c-ca9edc50a67e",
        "type": "Cat",
        "age": "Young",
        "gender": "Female",
        "size": "Medium",
        "coat": "Short",
        "breed": "Abyssinian",
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39927304/1/?bust=1510807262&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39927304/1/?bust=1510807262&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39927304/1/?bust=1510807262&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39927304/1/?bust=1510807262"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39927304/2/?bust=1510807269&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39927304/2/?bust=1510807269&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39927304/2/?bust=1510807269&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39927304/2/?bust=1510807269"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39927304/3/?bust=1510807273&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39927304/3/?bust=1510807273&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39927304/3/?bust=1510807273&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39927304/3/?bust=1510807273"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39927304/4/?bust=1510807328&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39927304/4/?bust=1510807328&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39927304/4/?bust=1510807328&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39927304/4/?bust=1510807328"
            }
        ]
    }
}
```

## 🛠️ Built With

This API was built using Node.js and Express.js, and uses the Cat API to retrieve information about cats.

## 👨‍💻 Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐾 Happy Cat-ing!

We hope you enjoy using the Cat-as-a-service API, and we welcome any feedback or suggestions you may have. Thanks for being a fellow cat lover! 🐱
