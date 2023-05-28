import { CommentStore } from "@/stores";
import { motion, AnimatePresence } from "framer-motion";
import { Comment } from "./Comment";
import { Title } from "@/components/Title";
import { CreateComment } from "./CreateComments";

export function Comments({
  isOpen,
  id,
  slice = 3,
}: {
  isOpen: boolean;
  id: string;
  slice?: number;
}) {
  const { comments } = CommentStore();

  if (comments[0]?.postId === id) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Title bold={700} color="gray" className="justify-center mb-4">
              Suggestions
            </Title>
            <CreateComment id={id} />
            <div className="grid grid-cols-1 gap-4 mt-4">
              {comments
                .slice(0, slice)
                .map((item, index) => <Comment item={item} key={index} />)
                .reverse()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  } else {
    return <>{isOpen && <CreateComment id={id} />}</>;
  }
}
