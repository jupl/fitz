import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots'

initStoryshots({configPath: 'story', test: multiSnapshotWithOptions()})
