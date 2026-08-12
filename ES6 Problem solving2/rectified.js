//Problem-01: Student Introduction Generator
function studentIntroduction(student) {
    const validKeys = Object.keys(student)
    if (typeof student !== "object" ||
        !Object.keys(student).includes("name") ||
        !Object.keys(student).includes("age") ||
        !Object.keys(student).includes("course")) {
        return `Invalid`
    }

    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`

}

//Problem-02: Active User Filter
function filterActiveUsers(users) {

    if (!Array.isArray(users) || users.length === 0) { return `Invalid` }
    for (const user of users) {
        if (!Object.keys(user).includes("isActive")) {
            return `Invalid`
        }
    }
    return users.filter(user => user.isActive === true);
}

//Problem-03: Trending Hashtag Counter
function countHashtags(caption) {
    if (typeof caption !== "string") {
        return `Invalid`
    }
    const hashTags = caption.split(" ").filter(tag => tag.startsWith("#"))
    const hashtagCount = hashTags.length

    const longestTag = hashTags.map(tag => tag.slice(1)).reduce((longest, tag) => tag.length > longest.length ? tag : longest, "")

    return { hashtagCount, longestTag }
}

//Problem-04: Bonus Score Calculator
function bonusScore(scores) {
    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid"
    }

    for (const score of scores) {
        if (typeof score !== "number") {
            return "Invalid"
        }
    }
    return scores.map(score => score + 10).reduce((total, score) => total + score, 0)
}

//Problem-05: Debugging Challenge - AI Leaderboard Generator
function generateLeaderboard(students) {
    if (!Array.isArray === students) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }
    for (const student of students) {
        if (!Object.keys(student).includes("name") ||
            !Object.keys(student).includes("score") ||
            typeof student.score !== "number") {
            return "Invalid";
        }
    }

    const qualified = students.filter(student => {
        return student.score >= 70;
    });


    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}

