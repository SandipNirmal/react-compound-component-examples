# React Compound Component Example
Set of Examples of React Compound Components Using React Context API

## Compound Component

Compound components are components which co-exists. It allows you to create components which share state implicitly.

It Contains Following Comppund Component Examples:

### Tabs

#### Usage

```
<Tabs>
  <TabHeader />
  <TabDetails />
</Tabs>
```

It can be also used in following way:

```
<Tabs>
  <TabDetails />
  <TabHeader />
</Tabs>
```

### Audio Player

#### Usage

1. Show all controls

```
<AudioPlayer source={Mario_Bros_Medley}>
  <Controls />
</AudioPlayer>
```

2. Show Only Play Control

```
<AudioPlayer source={Mario_Bros_Medley}>
 <Play />
 <ProgressBar />
</AudioPlayer>
```

3. Show Play and Pause Control

```
<AudioPlayer source={Mario_Bros_Medley}>
 <Play />
 <Pause />
 <ProgressBar />
</AudioPlayer>
```

4. Show Play/Pause Control

```
<AudioPlayer source={Mario_Bros_Medley}>
 <PlayPause />
 <ProgressBar />
</AudioPlayer>
```

It can be used in many different ways.

### Run Examples

```
npm i
```

```
npm start
```
