import { useRef } from "react";
import { useForm } from 'react-hook-form';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Button,
    Input,
    useDisclosure
} from "@chakra-ui/core"

import { createSite } from "@/lib/db";

const AddSiteModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef()
    const { handleSubmit, register } = useForm();
    const onCreateSite = (values) => createSite(values);

    return (
        <>
            <Button onClick={onOpen} fontWeight="medium" maxW="200px" variant="solid" size="md" color="black">
                Add Your First Site
            </Button>
            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
                    <ModalHeader fontWeight="bold">Add Site</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input
                                ref={initialRef}
                                placeholder="My site"
                                name="name"
                                {...register('name', { required: true })}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Link</FormLabel>
                            <Input
                                placeholder="https://website.com"
                                name="url"
                                {...register('url', { required: true })}

                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} mr={3} fontWeight="medium">Cancel</Button>
                        <Button
                            backgroundColor="#99FFFE"
                            color="#194D4C"
                            fontWeight="medium"
                            type="submit"
                        >Create</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddSiteModal;