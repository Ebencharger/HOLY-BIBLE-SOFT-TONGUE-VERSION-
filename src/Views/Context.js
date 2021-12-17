import { createContext, useContext, useState } from "react";

const context = createContext()

export function useTodo() {
    return useContext(context)
}

export function TodoProviders({ children }) {
    const books = ["GENESIS", "EXODUS", "LEVTICUS", "NUMBERS", "DEUTERONOMY"]
    const bible = [
        //Genesis
        {
            chapter: [
                {
                    chap: "1",
                    verse: [
                        "In His appointed time, God fashioned the heaven and the earth.",
                        "But the earth was not in a good form, indeed it was empty; and there was no trace of light anywhere. And the Spirit of God could not find a rest anywhere but on the waters.",
                        "God professed and called out light, and there was light"
                    ]
                },
                {
                    chap: "2",
                    verse: [
                        "God perfectly created the heavens and the earth, and everything they possessed.", "It's on the Sabbath day God completely committed all His work that He had started, and on Sabbath day He stopped creating any additional things, for He perfectly completed it all.", "God blessed the Sabbath day, and make it holy: because the day marked the total completion of His work He started"
                    ]
                },
                {
                    chap: "3",
                    verse: [
                        "And now the snake was full of deception more than any other animal of the field that Lord God had created. And he told Eve, it's true the Lord said, you must not eat among the fruits of the trees of the garden (Tempting Eve)."
                    ]
                },
                { 
                    chap: "4", 
                    verse: [
                        "And Adam mated with Eve; and Eve conceived, and she gave birth to Cain, and Adam said, I received from the Lord a male child."
                    ] 
                },
                { chap: "5" },
                { chap: "6" },
                { chap: "7" },
                { chap: "8" },
                { chap: "9" },
                { chap: "10" },
                { chap: "11" },
                { chap: "12" },
                { chap: "13" },
                { chap: "14" },
                { chap: "15" },
                { chap: "16" },
                { chap: "17" },
                { chap: "18" },
                { chap: "19" },
                { chap: "20" },
                { chap: "21" },
            ]
        },

        //EXODUS
        {
            chapter: [
                { chap: "1", verse: ["LORD YOUR GOD"] },
                { chap: "2" },
                { chap: "3" },
                { chap: "4" },
                { chap: "5" },
                { chap: "6" },
                { chap: "7" },
                { chap: "8" },
                { chap: "9" },
                { chap: "10" },
                { chap: "11" },
                { chap: "12" },
                { chap: "13" },
                { chap: "14" },
                { chap: "15" },
                { chap: "16" },
                { chap: "17" },
                { chap: "18" },
                { chap: "19" },
                { chap: "20" },
                { chap: "21" },
                { chap: "22" },
            ]
        }
    ]












    const value2 = 0;
    const value = { value2, bible, books };
    return <context.Provider value={value}>
        {children}
    </context.Provider>
}
