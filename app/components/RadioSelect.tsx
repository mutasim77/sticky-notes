import { RadioGroup, Sheet, Radio, Box, FormLabel } from '@mui/joy'
import Done from '@mui/icons-material/Done';

type RadioSelectProps = {
    setNewColorValue: (color: string) => string | void
}

const RadioSelect: React.FC<RadioSelectProps> = ({ setNewColorValue }) => {
    return (
        <>
            <Box sx={{}}>
                <FormLabel
                    id="product-color-attribute"
                    sx={{
                        mb: 1.5,
                        ml: .5,
                        textTransform: 'uppercase',
                        fontSize: 'xs',
                        letterSpacing: '0.15rem',
                    }}
                >
                    Color
                </FormLabel>
                <RadioGroup
                    aria-labelledby="product-color-attribute"
                    defaultValue="warning"
                    sx={{ gap: 2, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}
                >
                    {(
                        ['#ffcf7c', '#fea67e', '#be9efd', '#05d9fe', '#e7f09b', '#fb7878'] as const
                    ).map((color) => (
                        <Sheet
                            key={color}
                            sx={{
                                position: 'relative',
                                width: 40,
                                height: 40,
                                flexShrink: 0,
                                bgcolor: `${color}`,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Radio
                                overlay
                                variant="solid"
                                checkedIcon={<Done fontSize="small" />}
                                onFocus={() => setNewColorValue(color)}
                                value={color}
                                slotProps={{
                                    input: { 'aria-label': color },
                                    radio: {
                                        sx: {
                                            display: 'contents',
                                            '--variant-borderWidth': '2px',
                                        },
                                    },
                                }}
                            />
                        </Sheet>
                    ))}
                </RadioGroup>
            </Box>

        </>
    )
}
// ['#ffcf7c', '#fea67e', '#be9efd', '#05d9fe', '#e7f09b'];
export default RadioSelect;
