// Function to extract the destination URL from the query parameters
function getDestination() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('destination');
}

// Redirect to the destination after a short delay
window.onload = function () {
    const destination = getDestination();
    if (destination) {
        setTimeout(() => {
            window.location.href = destination;
        }, 5000); // Redirects after 5 seconds
    }

    // Call the random_generate function on load
    random_generate();

    setInterval(random_generate, 5000);
};

let p1 = document.getElementById("text");

const content = [
    "Proper nutrition is crucial for the health and well-being of your pets, ensuring they have the energy to play and thrive.",
    "Regular vet check-ups help monitor your pet's health and catch any potential issues early.",
    "A balanced diet tailored to your pet’s specific needs can prevent obesity and related health problems.",
    "Socialization is key for pets; it helps them become well-adjusted and reduces anxiety in new situations.",
    "Routine exercise is essential for maintaining a healthy weight and preventing behavioral issues in pets.",
    "Hydration is vital for your pet; always provide fresh water to keep them healthy and active.",
    "Grooming your pet regularly helps maintain a healthy coat and skin while reducing shedding.",
    "Training your pet not only helps with obedience but also strengthens the bond between you and your furry friend.",
    "Providing mental stimulation through toys and puzzles can prevent boredom and destructive behavior.",
    "Regular dental care is important to prevent periodontal disease and maintain your pet's overall health.",
    "Understanding your pet's body language can improve communication and strengthen your relationship.",
    "Creating a safe and comfortable environment is essential for your pet's emotional well-being.",
    "Be aware of common pet toxins, such as chocolate, grapes, and certain household plants, to keep your pet safe.",
    "Spaying or neutering your pet can prevent health issues and reduce the number of homeless animals.",
    "Regular vaccinations are essential to protect your pet from various diseases and illnesses.",
    "Using proper leash and harness techniques ensures safety during walks and helps with training.",
    "Pets can experience stress and anxiety; providing a quiet space can help them relax.",
    "Introduce new pets gradually to prevent territorial disputes and ensure a smooth transition.",
    "Regularly check your pet's ears and paws for signs of infection or injury.",
    "Cats require vertical space for climbing and exploring, so provide cat trees or shelves.",
    "Establishing a routine for feeding, walking, and playtime helps your pet feel secure.",
    "Using positive reinforcement during training encourages good behavior and strengthens trust.",
    "Ensure your pet's microchip is registered with your current contact information for safety.",
    "Regular exercise can help prevent obesity-related health issues in pets.",
    "Watch for changes in appetite or behavior, as these can indicate health problems.",
    "Limit treats and table scraps to maintain a healthy diet for your pet.",
    "Choose toys that are appropriate for your pet's size and chewing habits to avoid choking hazards.",
    "Introduce variety in your pet's diet gradually to prevent digestive upset.",
    "Flea and tick prevention is essential, especially in warmer months when these pests are prevalent.",
    "Provide scratching posts for cats to prevent furniture damage and satisfy their natural instincts.",
    "Keep your pet's living area clean to reduce allergens and promote a healthy environment.",
    "Be mindful of temperature extremes; provide shelter and comfort during hot or cold weather.",
    "Regularly monitor your pet's weight to catch any health issues early.",
    "Traveling with pets requires preparation; ensure you have proper gear and safety measures in place.",
    "Understanding your pet's breed-specific needs can enhance their care and happiness.",
    "Spend quality time with your pet; companionship is essential for their emotional health.",
    "Engage in interactive play to strengthen your bond and provide physical exercise.",
    "Keep hazardous materials out of reach to ensure your pet's safety.",
    "Seek professional help if your pet exhibits severe behavioral changes or anxiety.",
    "Educate yourself on the signs of common pet illnesses to ensure timely veterinary care."
];


function random_generate() {
    let randomIndex = Math.floor(Math.random() * content.length);
    p1.innerHTML = content[randomIndex];
}
