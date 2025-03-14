import { motion, AnimatePresence } from 'framer-motion';

interface CollapseProps {
    children: React.ReactNode;
    isOpen: boolean;
}

const Collapse = ({ children, isOpen }: CollapseProps) => { 
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Collapse;