import { X } from "phosphor-react";
import { useState } from "react";
import bugImage from '../assets/bug.svg'
import ideaImage from '../assets/idea.svg'
import otherImage from '../assets/other.svg'

const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: bugImage
    },
    IDEA: {
        title: 'Ideia',
        image: ideaImage
    },
    OTHER: {
        title: 'Outros',
        image: otherImage
    }
}

type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [choose, setChoose] = useState<FeedbackType | null>(null)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100" title="fechar">
                    <X className="w-4 h-4" weight="bold"></X>
                </button>
                <span className="text-xl leading-6">Feedback</span>
            </header>

            <div className="flex py-8 gap-2 w-full">
                {
                    Object.entries(feedbackTypes).map(([key, value]) => (
                        <>
                            <button
                                onClick={() => setChoose(key as FeedbackType)}
                                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500"
                                key={key}>
                                <img src={value.image}></img>
                                <span>{value.title}</span>
                            </button>
                        </>
                    ))
                }
            </div>

            <footer className="text-xs text-neural-400">
                Develop by <a className="underline underline-offset-2"> binno team</a>
            </footer>
        </div>
    )
}