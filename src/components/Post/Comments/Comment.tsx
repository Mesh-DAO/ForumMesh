import { Dots } from "@/components/Icons";
import { Title } from "@/components/Title";
import { IComment } from "@/interfaces";
import { DateHelper } from "@/helpers";
import { FiChevronsUp, FiCornerDownRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function Comment({ item }: { item: IComment }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const date = DateHelper.toFormat(item.createdAt);
  return (
    <div className="flex flex-col relative border-l-2 border-brand-red p-6 pb-2 w-[50vw] rounded-md gap-2 shadow-lg drop-shadow-xl hover:border-[#c9c9c9] hover:shadow-xl transition-all duration-300 ease-in-out">
      <div className="flex justify-between w-full">
        <div className="">
          <Title bold={700} size="md">
            @{item.author}
          </Title>
          <Title bold={400} size="xs">
            {date}
          </Title>
        </div>
        <div className="absolute top-6 right-6">
          <Dots
            className="absolute top-0 right-0 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{
                  display: menuOpen ? "block" : "none",
                  marginTop: "2rem",
                }}
                className="bg-[rgba(0,0,0,.1)] hover:bg-[rgba(0,0,0,.2)] w-20 p-1 rounded"
              >
                <Title
                  onClick={undefined}
                  size="sm"
                  color="gray"
                  bold={500}
                  className="justify-center cursor-pointer hover:text-gray-900"
                >
                  Editar
                </Title>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-4">
        <Title>{item.message}</Title>
      </div>
      <hr />
      <div className="flex items-center justify-end gap-1 cursor-pointer self-end">
        <FiCornerDownRight color="#5271DB" size={12} />
        <Title size="xs" bold={400} className="text-[#5271DB]">
          Reply
        </Title>
      </div>
    </div>
  );
}
