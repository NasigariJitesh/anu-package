/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/display-name */
import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import {
	CommonButtonProps,
	Container,
	ExtendedFAB,
	FAB,
	IconButton,
	Typography,
} from 'anu/lib/primitives';
import { RegularButton } from 'anu/lib/primitives/button/components/regular';
import * as FilePicker from 'expo-document-picker';
import {
	forwardRef,
	useCallback,
	useImperativeHandle,
	useMemo,
	useState,
} from 'react';

import { FileUploadReferenceProps, NativeFileUploadProps } from '../../types';
import {
	compressFileNative,
	getErrorMessageStyle,
	getFileUploadStyle,
} from '../../utils';
import UploadList from '../upload-list';
import { defaultProps } from './default';

/**
 * Function to handle file upload
 *
 * @param props - props of the file upload component
 * @param updateFiles - function to update the uploaded files to existing files list
 */
const handleFileUpload = async (
	props: NativeFileUploadProps,
	updateFiles: { (files: File[], uris: string[]): void },
) => {
	const result = await FilePicker.getDocumentAsync({
		multiple: props.multiple,
		type:
			props.fileType ?? props.uploadVariant === 'image' ? 'image/*' : undefined,
		copyToCacheDirectory: props.copyToCacheDirectory,
	});
	if (result.type === 'success' && result.uri && result.name) {
		const file = new File([result.uri], result.name, { type: result.mimeType });

		if (props.uploadVariant === 'image' && props.optimization) {
			const { compressedImage, uri } = await compressFileNative(
				file,
				result.uri,
				props.optimizationConfig,
			);
			const image = compressedImage;
			updateFiles([image], [uri]);
		} else {
			updateFiles([file], [result.uri]);
		}
	}
};

/**
 * File Upload Component
 */
const FileUpload = forwardRef<FileUploadReferenceProps, NativeFileUploadProps>(
	(props, reference) => {
		//@ts-expect-error
		const finalProps: FileUploadProps = { ...defaultProps, ...props };
		const [isUploadingState, setIsUploadingState] = useState(false);
		const [files, setFiles] = useState<File[]>([]);
		const [fileUris, setFileUris] = useState<string[]>([]);
		const [duplicateFileNameError, setDuplicateFileNameError] = useState(false);

		const isUploading = useCallback(() => isUploadingState, [isUploadingState]);

		useImperativeHandle(reference, () => ({ isUploading, files }), [
			isUploading,
			files,
		]);

		const handleUpload = useMemo(() => handleFileUpload, []);
		const theme = useTheme();
		const defaultStyle = getFileUploadStyle();
		const errorMessageStyle = getErrorMessageStyle(theme);

		const updateFiles = (resultFiles: File[], resultUris: string[]) => {
			setDuplicateFileNameError(false);

			if (finalProps.multiple) {
				if (finalProps.sortable) {
					for (const file of resultFiles) {
						const similarNameFiles = files.filter(
							(item) => item.name === file.name,
						);

						if (similarNameFiles.length > 0) {
							setDuplicateFileNameError(true);
							return;
						}
					}
				}

				const allFiles = [...files, ...resultFiles];
				const allUris = [...fileUris, ...resultUris];
				setFiles(allFiles);
				setFileUris(allUris);
				if (finalProps.onChange) finalProps.onChange(allFiles, allUris);
			} else {
				setFiles(resultFiles);
				setFileUris(resultUris);
				if (finalProps.onChange && resultFiles[0])
					finalProps.onChange(resultFiles[0], resultUris[0]);
			}
		};

		const deleteFile = (index: number) => {
			const array = [...files];
			array.splice(index, 1);
			setFiles(array);
			const uriArray = [...fileUris];
			uriArray.splice(index, 1);
			setFileUris(uriArray);
			if (finalProps.onChange)
				finalProps.onChange(
					array.length > 0 ? array : null,
					uriArray.length > 0 ? uriArray : null,
				);
		};

		const onSortHandler = (from: number, to: number) => {
			const array = [...files];
			const file = array[from];
			const uriArray = [...fileUris];
			const uri = uriArray[from];
			if (file === undefined || uri === undefined) return;
			array.splice(from, 1);
			array.splice(to, 0, file);
			setFiles(array);

			uriArray.splice(from, 1);
			uriArray.splice(to, 0, uri);
			setFileUris(uriArray);

			if (finalProps.onChange)
				finalProps.onChange(
					array.length > 0 ? array : null,
					uriArray.length > 0 ? uriArray : null,
				);
		};

		const renderButton = (buttonProps: NativeFileUploadProps) => {
			let propsForButton: CommonButtonProps;

			if (buttonProps.uploadVariant === 'image') {
				const {
					onChange,
					uploadVariant,
					multiple,
					sortable,
					optimization,

					previewType,
					style,
					...otherButtonProps
				} = buttonProps;

				propsForButton = otherButtonProps;
			} else {
				const {
					onChange,
					uploadVariant,
					multiple,
					sortable,
					fileType,
					copyToCacheDirectory,
					style,
					...otherButtonProps
				} = buttonProps;
				propsForButton = otherButtonProps;
			}

			switch (propsForButton.category) {
				case 'common': {
					return (
						<RegularButton
							{...propsForButton}
							onPress={async (event) => {
								if (propsForButton.onPress) propsForButton.onPress(event);
								setIsUploadingState(true);
								await handleUpload(finalProps, updateFiles);
								setIsUploadingState(false);
							}}
						/>
					);
				}
				case 'icon-button': {
					return (
						<IconButton
							{...propsForButton}
							onPress={async (event) => {
								if (propsForButton.onPress) propsForButton.onPress(event);
								setIsUploadingState(true);
								await handleUpload(finalProps, updateFiles);
								setIsUploadingState(false);
							}}
						/>
					);
				}
				case 'floating-action': {
					return (
						<FAB
							{...propsForButton}
							onPress={async (event) => {
								if (propsForButton.onPress) propsForButton.onPress(event);
								setIsUploadingState(true);
								await handleUpload(finalProps, updateFiles);
								setIsUploadingState(false);
							}}
						/>
					);
				}
				case 'extended-floating-action': {
					return (
						<ExtendedFAB
							{...propsForButton}
							onPress={async (event) => {
								if (propsForButton.onPress) propsForButton.onPress(event);
								setIsUploadingState(true);
								await handleUpload(finalProps, updateFiles);
								setIsUploadingState(false);
							}}
						/>
					);
				}
				default: {
					return <></>;
				}
			}
		};

		return (
			<Container
				disableGutters
				style={getCombinedStylesForView(defaultStyle, finalProps.style)}>
				<Container disableGutters>
					{renderButton(finalProps)}
					{duplicateFileNameError ? (
						<Typography.Body style={errorMessageStyle}>
							{finalProps.errorMessageForDuplicateFiles}
						</Typography.Body>
					) : null}
				</Container>
				{finalProps.hideFileList ? null : (
					<UploadList
						errors={finalProps.errors}
						sortable={finalProps.sortable}
						data={[...files]}
						uriData={[...fileUris]}
						onSort={onSortHandler}
						deleteData={deleteFile}
						variant={finalProps.uploadVariant}
						previewType={
							finalProps.uploadVariant === 'image'
								? finalProps.previewType
								: undefined
						}
						listStyle={finalProps.listStyle}
						listWidth={finalProps.listWidth}
						listHeight={finalProps.listHeight}
						listItemStyle={finalProps.listItemStyle}
						itemWidth={finalProps.itemWidth}
						itemHeight={finalProps.itemHeight}
					/>
				)}
			</Container>
		);
	},
);

export default FileUpload;
