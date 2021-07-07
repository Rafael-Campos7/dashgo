import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  isCurrenty?: boolean;
  number: number;
}

export function PaginationItem({ isCurrenty = false, number }: PaginationItemProps) {

  if (isCurrenty) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
    >
      {number}
    </Button>
  )
}